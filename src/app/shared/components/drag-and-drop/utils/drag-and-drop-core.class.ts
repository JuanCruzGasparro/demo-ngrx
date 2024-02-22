import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  DragAndDropIdType,
  DragAndDropItem,
  IDragAndDropCore,
} from '../interfaces/drag-and-drop-core.interface';
import { DRAG_AND_DROP_CAN_REORDER_DEFAULT } from './default-config';
import _ from 'lodash';

export class DragAndDropCore<T extends DragAndDropIdType>
  implements IDragAndDropCore<T>
{
  unassignedItems: DragAndDropItem<T>[] = [];
  assignedItems: DragAndDropItem<T>[] = [];

  //#region Core

  buildItems(initialList: DragAndDropItem<T>[]): DragAndDropItem<T>[] {
    return _.map(initialList, (item) => ({ ...item, selected: false }));
  }

  getAssignedIds(): T[] {
    return _.map(this.assignedItems, ({ id }) => id);
  }

  getUnassignedIds(): T[] {
    return _.map(this.unassignedItems, ({ id }) => id);
  }

  getCheckedItems(items: DragAndDropItem<T>[]): DragAndDropItem<T>[] {
    return _.map(
      _.filter(items, ({ selected }) => !!selected),
      (item) => ({ ...item, selected: false })
    );
  }

  moveToAssigned(list: DragAndDropItem<T>[]): void {
    if (list.length === 0) return;
    this.unassignedItems = _.filter(
      this.unassignedItems,
      ({ id }) => !_.some(list, { id })
    );
    this.assignedItems = [...this.assignedItems, ...list];
  }

  moveToUnassigned(list: DragAndDropItem<T>[]): void {
    if (list.length === 0) return;
    this.assignedItems = _.filter(
      this.assignedItems,
      ({ id }) => !_.some(list, { id })
    );
    this.unassignedItems = [...this.unassignedItems, ...list];
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

  //#endregion Core

  //#region Private methods

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
