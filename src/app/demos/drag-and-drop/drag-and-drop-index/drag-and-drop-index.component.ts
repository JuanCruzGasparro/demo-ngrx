import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragAndDropComponent } from '@shared/components/drag-and-drop/drag-and-drop.component';
import {
  DragAndDropConfig,
  DragAndDropStatus,
} from '@shared/components/drag-and-drop/types/drag-and-drop-config.interface';
import { DragAndDropItem } from '@shared/components/drag-and-drop/types/drag-and-drop.interface';
import { buildDragAndDropConfig } from '@shared/components/drag-and-drop/utils/default-config';
import { MaterialModule } from '@shared/modules/material.module';

@Component({
  selector: 'app-drag-and-drop-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, DragAndDropComponent],
  templateUrl: './drag-and-drop-index.component.html',
  styleUrl: './drag-and-drop-index.component.scss',
})
export class DragAndDropIndexComponent {
  public dragAndDropConfig = buildDragAndDropConfig({
    right: {
      hasActionButton: true,
      hasStatus: true,
      canReorder: true,
    },
  });
  public assignedItems: DragAndDropItem<number>[] = [];
  public unassignedItems: DragAndDropItem<number>[] = [
    { id: 1, description: 'Casa' },
    { id: 2, description: 'Pueblo' },
    { id: 3, description: 'Edificio' },
    { id: 4, description: 'Comisaria' },
    { id: 5, description: 'Auto' },
    { id: 6, description: 'Choza' },
    { id: 7, description: 'Estación de bomberos' },
    { id: 8, description: 'Mansión' },
    { id: 9, description: 'Casa futurística' },
    { id: 10, description: 'Hospital' },
  ];

  public assignedItemsChangeHandler(list: number[]): void {
    console.log('assigned', list);
  }

  public unassignedItemsChangeHandler(list: number[]): void {
    console.log('unassigned', list);
  }
}
