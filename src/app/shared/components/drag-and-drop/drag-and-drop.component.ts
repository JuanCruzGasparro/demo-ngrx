import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { DragAndDropPanelComponent } from './components/drag-and-drop-panel/drag-and-drop-panel.component';
import { DragAndDropActionsComponent } from './components/drag-and-drop-actions/drag-and-drop-actions.component';
import { DragAndDropItem } from './interfaces/drag-and-drop-core.interface';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { DragAndDropConfig } from './interfaces/drag-and-drop-config.interface';
import { buildDragAndDropConfig } from './utils/default-config';
import { DragAndDropCore } from './utils/drag-and-drop-core.class';
import { ICollectionService } from '@shared/interfaces/collection-service';
import { Subscription } from 'rxjs';

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
export class DragAndDropComponent
  extends DragAndDropCore<number>
  implements OnChanges, OnDestroy
{
  //#region Inputs and Outputs

  @Input({ required: true }) public id!: string;
  @Input({ required: true }) public config: DragAndDropConfig =
    buildDragAndDropConfig();
  @Input({ required: true }) public service!: ICollectionService<
    DragAndDropItem<number>
  >;
  @Input({ required: true }) public values: number[] = [];

  @Output() public assignedItemsChange: EventEmitter<number[]> =
    new EventEmitter();
  @Output() public unassignedItemsChange: EventEmitter<number[]> =
    new EventEmitter();

  //#endregion Inputs and Outputs

  dataService!: ICollectionService<DragAndDropItem<number>>;

  isUnassignedLoading = signal(false);
  isAssignedLoading = signal(false);

  private _subscription = new Subscription();

  ngOnChanges({ service, values }: SimpleChanges): void {
    if (service?.currentValue) {
      this.dataService = service.currentValue;
      this._getInitialData();
    }
    if (values?.currentValue) {
      this._patchValues(values.currentValue);
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  //#region Actions

  public moveToAsssignedHandler(): void {
    this.moveToAssigned(this.getCheckedItems(this.unassignedItems));
    this._emitAssignedItems();
    this._emitUnassignedItems();
  }

  public moveToUnasssignedHandler(): void {
    this.moveToUnassigned(this.getCheckedItems(this.assignedItems));
    this._emitAssignedItems();
    this._emitUnassignedItems();
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

  //#region Private methods

  private _emitAssignedItems(): void {
    this.assignedItemsChange.emit(this.getAssignedIds());
  }

  private _emitUnassignedItems(): void {
    this.unassignedItemsChange.emit(this.getUnassignedIds());
  }

  private _getInitialData(): void {
    this.isUnassignedLoading.set(true);
    this._subscription.add(
      this.getInitialData().subscribe({
        next: (list) => {
          this.unassignedItems = list;
          this._patchValues(this.values);
        },
        error: (error) => {
          throw error;
        },
        complete: () => {
          this.isUnassignedLoading.set(false);
        },
      })
    );
  }

  private _patchValues(values: number[]): void {
    if (this.values.length !== 0)
      this.moveToAssigned(this.mapIdsToItems(values));
  }

  //#endregion Private methods
}
