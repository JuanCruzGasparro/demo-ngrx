import {
  DragAndDropConfig,
  DragAndDropConfigBuilder,
  DragAndDropStatus,
} from '../types/drag-and-drop-config.interface';

export const DRAG_AND_DROP_DEFAULT_CONFIG: DragAndDropConfig = {
  left: {
    title: 'No asignados',
    isSelectable: true,
    hasStatus: false,
    defaultStatus: DragAndDropStatus.Default,
    canReorder: false,
    hasActionButton: false,
    actionButtonIcon: 'edit',
  },
  right: {
    title: 'Asignados',
    isSelectable: true,
    hasStatus: false,
    defaultStatus: DragAndDropStatus.Default,
    canReorder: false,
    hasActionButton: false,
    actionButtonIcon: 'edit',
  },
};

export const buildDragAndDropConfig = (
  overrides?: DragAndDropConfigBuilder
): DragAndDropConfig => ({
  left: overrides?.left
    ? { ...DRAG_AND_DROP_DEFAULT_CONFIG, ...overrides.left }
    : DRAG_AND_DROP_DEFAULT_CONFIG.left,
  right: overrides?.right
    ? { ...DRAG_AND_DROP_DEFAULT_CONFIG, ...overrides.right }
    : DRAG_AND_DROP_DEFAULT_CONFIG.right,
});
