export type DragAndDropConfig = {
  left: DragAndDropPanelConfig;
  right: DragAndDropPanelConfig;
};

export type DragAndDropPanelConfig = {
  side: DragAndDropPanelSide;
  canReorder?: boolean;
  title?: string;
};

export type DragAndDropPanelSide = 'right' | 'left';
