import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drag-and-drop-actions',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './drag-and-drop-actions.component.html',
  styleUrl: './drag-and-drop-actions.component.scss',
})
export class DragAndDropActionsComponent {}
