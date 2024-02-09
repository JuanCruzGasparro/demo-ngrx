import { DragAndDropConfig } from '../types/drag-and-drop-config.interface';

export const DRAG_AND_DROP_DEFAULT_CONFIG: DragAndDropConfig = {
  left: {
    side: 'left',
    title: 'No asignados',
    canReorder: true,
  },
  right: {
    side: 'right',
    title: 'Asignados',
    canReorder: true,
  },
};
