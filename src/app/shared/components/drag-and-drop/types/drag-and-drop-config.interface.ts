export type DragAndDropPanelSide = 'right' | 'left';

export enum DragAndDropStatus {
  Default = 'default',
  Success = 'success',
  Error = 'error',
}

export interface DragAndDropConfig {
  left: DragAndDropPanelConfig;
  right: DragAndDropPanelConfig;
}

export interface DragAndDropConfigBuilder {
  left?: DragAndDropPanelConfig;
  right?: DragAndDropPanelConfig;
}

export interface DragAndDropPanelConfig {
  title?: string;
  isSelectable?: boolean;
  hasStatus?: boolean;
  defaultStatus?: DragAndDropStatus;
  canReorder?: boolean;
  hasActionButton?: boolean;
  actionButtonIcon?: string;
}
