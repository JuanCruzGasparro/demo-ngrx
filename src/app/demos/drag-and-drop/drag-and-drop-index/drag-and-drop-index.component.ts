import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DragAndDropComponent } from '@shared/components/drag-and-drop/drag-and-drop.component';
import { DragAndDropItem } from '@shared/components/drag-and-drop/interfaces/drag-and-drop-core.interface';
import { buildDragAndDropConfig } from '@shared/components/drag-and-drop/utils/default-config';
import { MaterialModule } from '@shared/modules/material.module';
import { MovieService } from '@shared/services/movie/movie.service';

@Component({
  selector: 'app-drag-and-drop-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, DragAndDropComponent],
  templateUrl: './drag-and-drop-index.component.html',
  styleUrl: './drag-and-drop-index.component.scss',
})
export class DragAndDropIndexComponent implements OnInit {
  public dragAndDropConfig = buildDragAndDropConfig({
    right: {
      hasActionButton: true,
      hasStatus: true,
      canReorder: true,
    },
  });
  public assignedItems: DragAndDropItem<number>[] = [];
  public unassignedItems: DragAndDropItem<number>[] = [];

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.get().subscribe({
      next: (items) => {
        console.log(items);
        this.unassignedItems = items;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public assignedItemsChangeHandler(list: number[]): void {
    console.log('assigned', list);
  }

  public unassignedItemsChangeHandler(list: number[]): void {
    console.log('unassigned', list);
  }
}
