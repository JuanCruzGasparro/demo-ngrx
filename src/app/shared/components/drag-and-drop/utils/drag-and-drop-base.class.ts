import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragAndDropItem } from '../types/drag-and-drop.interface';
import { DRAG_AND_DROP_CAN_REORDER_DEFAULT } from './default-config';

type IdType = string | number;

interface IDragAndDropBase<T> {
  unassignedItems: DragAndDropItem<T>[];
  assignedItems: DragAndDropItem<T>[];

  getAssignedIds: () => T[];
  getUnassignedIds: () => T[];
  onDrop: (
    event: CdkDragDrop<DragAndDropItem<T>[]>,
    canReorder?: boolean
  ) => void;
}

export class DragAndDropBase<T extends IdType> implements IDragAndDropBase<T> {
  unassignedItems: DragAndDropItem<T>[] = [];
  assignedItems: DragAndDropItem<T>[] = [];

  getAssignedIds(): T[] {
    return this.assignedItems.map((item) => item.id);
  }

  getUnassignedIds(): T[] {
    return this.unassignedItems.map((item) => item.id);
  }

  onDrop(
    event: CdkDragDrop<DragAndDropItem<T>[], DragAndDropItem<T>[], any>,
    canReorder: boolean = DRAG_AND_DROP_CAN_REORDER_DEFAULT
  ): void {
    const { previousContainer, previousIndex, container, currentIndex } = event;
    if (previousContainer !== container) {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
      return;
    }
    if (canReorder)
      moveItemInArray(container.data, previousIndex, currentIndex);
  }
}
