import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragAndDropComponent } from '@shared/components/drag-and-drop/drag-and-drop.component';
import { buildDragAndDropConfig } from '@shared/components/drag-and-drop/utils/default-config';
import { MaterialModule } from '@shared/modules/material.module';
import { MovieService } from '@shared/services/movie/movie.service';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, DragAndDropComponent],
  templateUrl: './drag-and-drop-index.component.html',
  styleUrl: './drag-and-drop-index.component.scss',
})
export class DragAndDropIndexComponent {
  dragAndDropConfig = buildDragAndDropConfig({
    right: {
      hasActionButton: true,
      hasStatus: true,
      canReorder: true,
    },
  });
  dragAndDropValues$ = of<number[]>([1, 3, 5, 8]).pipe(delay(1500));

  constructor(public movieService: MovieService) {}

  public assignedItemsChangeHandler(list: number[]): void {
    console.log('assigned', list);
  }

  public unassignedItemsChangeHandler(list: number[]): void {
    console.log('unassigned', list);
  }
}
