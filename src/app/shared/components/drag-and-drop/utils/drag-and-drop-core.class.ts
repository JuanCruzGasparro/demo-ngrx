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
import { ICollectionService } from '@shared/interfaces/collection-service';
import { Observable, map } from 'rxjs';

export abstract class DragAndDropCore<T extends DragAndDropIdType>
  implements IDragAndDropCore<T>
{
  private _unassignedItems: DragAndDropItem<T>[] = [];
  get unassignedItems(): DragAndDropItem<T>[] {
    return this._unassignedItems;
  }
  set unassignedItems(value: DragAndDropItem<T>[]) {
    this._unassignedItems = value;
  }
  private _assignedItems: DragAndDropItem<T>[] = [];
  get assignedItems(): DragAndDropItem<T>[] {
    return this._assignedItems;
  }
  set assignedItems(value: DragAndDropItem<T>[]) {
    this._assignedItems = value;
  }
  abstract dataService: ICollectionService<DragAndDropItem<T>>;

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

  getInitialData(): Observable<DragAndDropItem<T>[]> {
    return this.dataService.get().pipe(map((list) => this.buildItems(list)));
  }

  mapIdsToItems(ids: T[]): DragAndDropItem<T>[] {
    return _.reduce(
      ids,
      (collection, id) => {
        const item = this.unassignedItems.find((item) => item.id === id);
        if (item) collection.push(item);
        return collection;
      },
      [] as DragAndDropItem<T>[]
    );
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
