import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragAndDropComponent } from '@shared/components/drag-and-drop/drag-and-drop.component';
import { MaterialModule } from '@shared/modules/material.module';

@Component({
  selector: 'app-drag-and-drop-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, DragAndDropComponent],
  templateUrl: './drag-and-drop-index.component.html',
  styleUrl: './drag-and-drop-index.component.scss',
})
export class DragAndDropIndexComponent {}
