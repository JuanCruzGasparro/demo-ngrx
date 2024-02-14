import { CdkDragDrop } from '@angular/cdk/drag-drop';

export interface DragAndDropItem<T extends string | number> {
  id: T;
  description: string;
  selected?: boolean;
}

export interface IDragAndDropBase<T extends string | number> {
  unassignedItems: DragAndDropItem<T>[];
  assignedItems: DragAndDropItem<T>[];

  getAssignedIds: () => T[];
  getUnassignedIds: () => T[];
  onDrop: (
    event: CdkDragDrop<DragAndDropItem<T>[]>,
    canReorder?: boolean
  ) => void;
}
