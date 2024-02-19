import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  DragAndDropIdType,
  DragAndDropItem,
  IDragAndDropCore,
} from '../interfaces/drag-and-drop.interface';
import { DRAG_AND_DROP_CAN_REORDER_DEFAULT } from './default-config';
import { DragAndDropFilter } from './drag-and-drop-filter-base.class';

export class DragAndDropCore<T extends DragAndDropIdType>
  implements IDragAndDropCore<T>
{
  unassignedItems: DragAndDropItem<T>[] = [];
  assignedItems: DragAndDropItem<T>[] = [];

  unassignedFilter = new DragAndDropFilter();
  assignedFilter = new DragAndDropFilter();

  getAssignedIds(): T[] {
    return this.assignedItems.map((item) => item.id);
  }

  getUnassignedIds(): T[] {
    return this.unassignedItems.map((item) => item.id);
  }

  dragAndDropItemsBuilder(
    initialList: DragAndDropItem<T>[]
  ): DragAndDropItem<T>[] {
    return [...initialList.map((item) => ({ ...item, selected: false }))];
  }

  moveCheckedUnassignedItems(): void {
    const checkedItems = this._getCheckedItems(this.unassignedItems);
    if (checkedItems.length === 0) return;
    this.unassignedItems = this._removeCheckedItems(this.unassignedItems);
    this.assignedItems = [...this.assignedItems, ...checkedItems];
  }

  moveCheckedAssignedItems(): void {
    const checkedItems = this._getCheckedItems(this.assignedItems);
    if (checkedItems.length === 0) return;
    this.assignedItems = this._removeCheckedItems(this.assignedItems);
    this.unassignedItems = [...this.unassignedItems, ...checkedItems];
  }

  onDrop(
    event: CdkDragDrop<DragAndDropItem<T>[]>,
    canReorder: boolean = DRAG_AND_DROP_CAN_REORDER_DEFAULT
  ): void {
    const { previousContainer, container } = event;
    if (previousContainer !== container) {
      this._transferArrayItem(event);
      return;
    }
    if (canReorder) this._moveItemInArray(event);
  }

  //#region Private methods

  private _getCheckedItems(items: DragAndDropItem<T>[]): DragAndDropItem<T>[] {
    return items
      .filter((item) => item.selected === true)
      .map((item) => ({ ...item, selected: false }));
  }

  private _removeCheckedItems(
    items: DragAndDropItem<T>[]
  ): DragAndDropItem<T>[] {
    return items.filter((item) => item.selected === false);
  }

  private _transferArrayItem({
    previousContainer,
    container,
    previousIndex,
    currentIndex,
  }: CdkDragDrop<DragAndDropItem<T>[]>): void {
    transferArrayItem(
      previousContainer.data,
      container.data,
      previousIndex,
      currentIndex
    );
  }

  private _moveItemInArray({
    container: { data },
    previousIndex,
    currentIndex,
  }: CdkDragDrop<DragAndDropItem<T>[]>): void {
    moveItemInArray(data, previousIndex, currentIndex);
  }

  //#endregion Private methods
}
