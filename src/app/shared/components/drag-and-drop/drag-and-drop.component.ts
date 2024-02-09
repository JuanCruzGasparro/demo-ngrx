import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { DragAndDropPanelComponent } from './components/drag-and-drop-panel/drag-and-drop-panel.component';
import { DragAndDropActionsComponent } from './components/drag-and-drop-actions/drag-and-drop-actions.component';
import { DragAndDropItem } from './types/drag-and-drop.interface';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  DragAndDropConfig,
  DragAndDropPanelSide,
} from './types/drag-and-drop-config.interface';
import {
  DRAG_AND_DROP_DEFAULT_CONFIG,
  buildDragAndDropConfig,
} from './utils/default-config';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    MaterialModule,
    DragAndDropPanelComponent,
    DragAndDropActionsComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss',
})
export class DragAndDropComponent implements OnChanges {
  @Input() public id: string = 'drag-and-drop';
  @Input() public config: DragAndDropConfig = buildDragAndDropConfig();
  @Input() public unassignedItems: DragAndDropItem<number>[] = [];
  @Input() public assignedItems: DragAndDropItem<number>[] = [];

  public ngOnChanges({ config }: SimpleChanges): void {
    if (config?.currentValue)
      this.config = this._patchConfig(config.currentValue);
  }

  public onDropHandler(event: CdkDragDrop<DragAndDropItem<number>[]>) {
    const { previousContainer, previousIndex, container, currentIndex } = event;
    if (previousContainer === container) {
      const side = this._getPanelSide(container);
      if (this.config[side]?.canReorder)
        moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
    }
  }
  private _patchConfig({ left, right }: DragAndDropConfig): DragAndDropConfig {
    return {
      left: left
        ? { ...DRAG_AND_DROP_DEFAULT_CONFIG.left, ...left }
        : DRAG_AND_DROP_DEFAULT_CONFIG.left,
      right: right
        ? { ...DRAG_AND_DROP_DEFAULT_CONFIG.right, ...right }
        : DRAG_AND_DROP_DEFAULT_CONFIG.right,
    } as DragAndDropConfig;
  }

  private _getPanelSide(
    container: CdkDropList<DragAndDropItem<number>[]>
  ): DragAndDropPanelSide {
    console.log(container);
    const side = container.id.replace('drag-and-drop-panel-', '');
    if (side !== 'left' && side !== 'right')
      throw Error(`invalid side: '${side}' on '${container.id}' `);
    return side;
  }
}
