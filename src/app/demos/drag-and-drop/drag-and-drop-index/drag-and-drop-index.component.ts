import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragAndDropComponent } from '@shared/components/drag-and-drop/drag-and-drop.component';
import { DragAndDropConfig } from '@shared/components/drag-and-drop/types/drag-and-drop-config.interface';
import { MaterialModule } from '@shared/modules/material.module';

@Component({
  selector: 'app-drag-and-drop-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, DragAndDropComponent],
  templateUrl: './drag-and-drop-index.component.html',
  styleUrl: './drag-and-drop-index.component.scss',
})
export class DragAndDropIndexComponent {
  public dragAndDropConfig: DragAndDropConfig = {
    left: {
      // title: 'Left',
      side: 'left',
    },
    right: {
      title: 'Right',
      side: 'right',
    },
  };
}
