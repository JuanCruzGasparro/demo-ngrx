import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drag-and-drop-actions',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './drag-and-drop-actions.component.html',
  styleUrl: './drag-and-drop-actions.component.scss',
})
export class DragAndDropActionsComponent {
  @Output() public moveToAsssigned = new EventEmitter<void>();
  @Output() public moveToUnasssigned = new EventEmitter<void>();

  public onMoveToAssigned(): void {
    this.moveToAsssigned.emit();
  }

  public onMoveToUnassigned(): void {
    this.moveToUnasssigned.emit();
  }
}
