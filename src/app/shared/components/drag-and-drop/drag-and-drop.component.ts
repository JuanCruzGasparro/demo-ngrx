import { Component, Input, ViewChild } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { DragAndDropPanelComponent } from './components/drag-and-drop-panel/drag-and-drop-panel.component';
import { DragAndDropActionsComponent } from './components/drag-and-drop-actions/drag-and-drop-actions.component';
import { DragAndDropConfig, DragAndDropItem } from './drag-and-drop.interface';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [
    MaterialModule,
    DragAndDropPanelComponent,
    DragAndDropActionsComponent,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss',
})
export class DragAndDropComponent {
  @Input() public id: string = 'drag-and-drop';
  @Input() public config: DragAndDropConfig = {};

  @ViewChild('unassignedPanel')
  public unassignedPanel!: DragAndDropPanelComponent;
  @ViewChild('assignedPanel')
  public assignedPanel!: DragAndDropPanelComponent;

  public unassignedItems: DragAndDropItem[] = [
    { id: 1, description: 'primero' },
    { id: 2, description: 'segundo' },
    { id: 3, description: 'tercero' },
    { id: 4, description: 'cuarto' },
    { id: 5, description: 'quinto' },
  ];

  public assignedItems: DragAndDropItem[] = [];

  public leftPanelDropHandler(item: DragAndDropItem): void {
    console.log('left', item);
  }

  public rightPanelDropHandler(item: DragAndDropItem): void {
    console.log('right', item);
  }

  drop(event: CdkDragDrop<DragAndDropItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
