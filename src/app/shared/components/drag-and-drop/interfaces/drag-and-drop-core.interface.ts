import { CdkDragDrop } from '@angular/cdk/drag-drop';

export type DragAndDropIdType = string | number;

export interface DragAndDropItem<T extends DragAndDropIdType> {
  id: T;
  description: string;
  selected?: boolean;
}

export interface IDragAndDropPanel {}

export interface IDragAndDropCore<T extends DragAndDropIdType> {
  unassignedItems: DragAndDropItem<T>[];
  assignedItems: DragAndDropItem<T>[];

  buildItems: (list: DragAndDropItem<T>[]) => DragAndDropItem<T>[];

  getAssignedIds: () => T[];
  getUnassignedIds: () => T[];
  getCheckedItems: (list: DragAndDropItem<T>[]) => DragAndDropItem<T>[];

  moveToAssigned: (list: DragAndDropItem<T>[]) => void;
  moveToUnassigned: (list: DragAndDropItem<T>[]) => void;

  onDrop: (
    event: CdkDragDrop<DragAndDropItem<T>[]>,
    canReorder?: boolean
  ) => void;
}
