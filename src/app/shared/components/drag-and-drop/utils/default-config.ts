import {
  DragAndDropConfig,
  DragAndDropConfigBuilder,
  DragAndDropStatus,
} from '../interfaces/drag-and-drop-config.interface';

export const DRAG_AND_DROP_CAN_REORDER_DEFAULT = false;

export const DRAG_AND_DROP_DEFAULT_CONFIG: DragAndDropConfig = {
  left: {
    title: 'No asignados',
    hasFilter: true,
    isSelectable: true,
    hasStatus: false,
    defaultStatus: DragAndDropStatus.Default,
    canReorder: DRAG_AND_DROP_CAN_REORDER_DEFAULT,
    hasActionButton: false,
    actionButtonIcon: 'edit',
  },
  right: {
    title: 'Asignados',
    hasFilter: true,
    isSelectable: true,
    hasStatus: false,
    defaultStatus: DragAndDropStatus.Default,
    canReorder: DRAG_AND_DROP_CAN_REORDER_DEFAULT,
    hasActionButton: false,
    actionButtonIcon: 'edit',
  },
};

export const buildDragAndDropConfig = (
  overrides?: DragAndDropConfigBuilder
): DragAndDropConfig => ({
  left: overrides?.left
    ? { ...DRAG_AND_DROP_DEFAULT_CONFIG.left, ...overrides.left }
    : DRAG_AND_DROP_DEFAULT_CONFIG.left,
  right: overrides?.right
    ? { ...DRAG_AND_DROP_DEFAULT_CONFIG.right, ...overrides.right }
    : DRAG_AND_DROP_DEFAULT_CONFIG.right,
});
