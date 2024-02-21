import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { DragAndDropPanelComponent } from './components/drag-and-drop-panel/drag-and-drop-panel.component';
import { DragAndDropActionsComponent } from './components/drag-and-drop-actions/drag-and-drop-actions.component';
import { DragAndDropItem } from './interfaces/drag-and-drop.interface';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { DragAndDropConfig } from './interfaces/drag-and-drop-config.interface';
import { buildDragAndDropConfig } from './utils/default-config';
import { DragAndDropCore } from './utils/drag-and-drop-base.class';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    MaterialModule,
    DragAndDropPanelComponent,
    DragAndDropActionsComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss',
})
export class DragAndDropComponent extends DragAndDropCore<number> {
  //#region Inputs and Outputs

  @Input() public id: string = 'drag-and-drop';
  @Input() public config: DragAndDropConfig = buildDragAndDropConfig();
  @Input() public set unassigned(value: DragAndDropItem<number>[]) {
    this.unassignedItems = this.dragAndDropItemsBuilder(value);
  }
  @Input() public set assigned(value: DragAndDropItem<number>[]) {
    this.assignedItems = this.dragAndDropItemsBuilder(value);
  }

  @Output() public assignedItemsChange: EventEmitter<number[]> =
    new EventEmitter();
  @Output() public unassignedItemsChange: EventEmitter<number[]> =
    new EventEmitter();
  // @Output() public unassignedFilterChange: EventEmitter<string> =
  //   new EventEmitter<string>();
  // @Output() public assignedFilterChange: EventEmitter<string> =
  //   new EventEmitter<string>();

  //#endregion Inputs and Outputs

  //#region Actions

  public moveToAsssignedHandler(): void {
    this.moveCheckedUnassignedItems();
  }

  public moveToUnasssignedHandler(): void {
    this.moveCheckedAssignedItems();
  }

  //#endregion Actions

  //#region Panel

  public onUnassignedPanelDropHandler(
    event: CdkDragDrop<DragAndDropItem<number>[]>
  ): void {
    const { canReorder } = this.config.left;
    this.onDrop(event, canReorder);
    if (event.previousContainer !== event.container) {
      this._emitAssignedItems();
      return;
    }
    if (canReorder) this._emitUnassignedItems();
  }

  public onAssignedPanelDropHandler(
    event: CdkDragDrop<DragAndDropItem<number>[]>
  ): void {
    const { canReorder } = this.config.right;
    this.onDrop(event, canReorder);
    if (!canReorder && event.previousContainer === event.container) return;
    this._emitAssignedItems();
  }

  //#endregion Panel

  //#region Filter

  // public onUnassignedFilterChange(term: string): void {
  // this.unassignedFilterChange.emit(term);
  // }

  // public onAssignedFilterChange(term: string): void {
  // this.assignedFilterChange.emit(term);
  // }

  //#endregion Filter

  //#region Private methods

  private _emitAssignedItems(): void {
    this.assignedItemsChange.emit(this.getAssignedIds());
  }

  private _emitUnassignedItems(): void {
    this.unassignedItemsChange.emit(this.getUnassignedIds());
  }

  //#endregion Private methods
}
