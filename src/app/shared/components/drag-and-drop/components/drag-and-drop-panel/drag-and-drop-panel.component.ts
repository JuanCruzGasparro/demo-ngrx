import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { DragAndDropItem } from '../../types/drag-and-drop.interface';
import {
  DragAndDropPanelConfig,
  DragAndDropPanelSide,
  DragAndDropStatus,
} from '../../types/drag-and-drop-config.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/material.module';

@Component({
  selector: 'app-drag-and-drop-panel',
  standalone: true,
  imports: [CommonModule, MaterialModule, CdkDropList, CdkDrag],
  templateUrl: './drag-and-drop-panel.component.html',
  styleUrl: './drag-and-drop-panel.component.scss',
})
export class DragAndDropPanelComponent {
  @Input() public side!: DragAndDropPanelSide;
  @Input() public config!: DragAndDropPanelConfig;
  @Input() public items: DragAndDropItem<number>[] = [];

  @Output() public drop = new EventEmitter<
    CdkDragDrop<DragAndDropItem<number>[]>
  >();

  public get statusClass(): string {
    return this.config.defaultStatus ?? DragAndDropStatus.Default;
  }

  public onDrop(event: CdkDragDrop<DragAndDropItem<number>[]>): void {
    this.drop.emit(event);
  }
}
