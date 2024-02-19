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

  getAssignedIds: () => T[];
  getUnassignedIds: () => T[];
  onDrop: (
    event: CdkDragDrop<DragAndDropItem<T>[]>,
    canReorder?: boolean
  ) => void;
}
