import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { DragAndDropPanelComponent } from './components/drag-and-drop-panel/drag-and-drop-panel.component';
import { DragAndDropActionsComponent } from './components/drag-and-drop-actions/drag-and-drop-actions.component';
import { DragAndDropItem } from './types/drag-and-drop.interface';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  DragAndDropConfig,
  DragAndDropPanelSide,
} from './types/drag-and-drop-config.interface';
import {
  DRAG_AND_DROP_DEFAULT_CONFIG,
  buildDragAndDropConfig,
} from './utils/default-config';
import { DragAndDropBase } from './utils/drag-and-drop-base.class';

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
export class DragAndDropComponent extends DragAndDropBase<number> {
  @Input() public id: string = 'drag-and-drop';
  @Input() public config: DragAndDropConfig = buildDragAndDropConfig();
  @Input() public override unassignedItems: DragAndDropItem<number>[] = [];
  @Input() public override assignedItems: DragAndDropItem<number>[] = [];

  @Output() public assignedItemsChange: EventEmitter<number[]> =
    new EventEmitter();
  @Output() public unassignedItemsChange: EventEmitter<number[]> =
    new EventEmitter();

  public onUnassignedPanelDropHandler(
    event: CdkDragDrop<DragAndDropItem<number>[]>
  ): void {
    const { canReorder } = this.config.left;
    this.onDrop(event, canReorder);
    if (event.previousContainer !== event.container) {
      this.emitAssignedItems();
      return;
    }
    if (canReorder) this.emitUnassignedItems();
  }

  public onAssignedPanelDropHandler(
    event: CdkDragDrop<DragAndDropItem<number>[]>
  ): void {
    const { canReorder } = this.config.right;
    this.onDrop(event, canReorder);
    if (!canReorder && event.previousContainer === event.container) return;
    this.emitAssignedItems();
  }

  private emitAssignedItems(): void {
    this.assignedItemsChange.emit(this.getAssignedIds());
  }

  private emitUnassignedItems(): void {
    this.unassignedItemsChange.emit(this.getUnassignedIds());
  }
}
