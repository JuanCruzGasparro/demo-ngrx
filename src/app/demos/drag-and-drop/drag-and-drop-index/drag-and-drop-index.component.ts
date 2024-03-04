import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DragAndDropComponent } from '@shared/components/drag-and-drop/drag-and-drop.component';
import { buildDragAndDropConfig } from '@shared/components/drag-and-drop/utils/default-config';
import { MaterialModule } from '@shared/modules/material.module';
import { ConfigService } from '@shared/services/config/config.service';
import { MovieService } from '@shared/services/movie/movie.service';
import { BehaviorSubject, delay, finalize } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, DragAndDropComponent],
  templateUrl: './drag-and-drop-index.component.html',
  styleUrl: './drag-and-drop-index.component.scss',
})
export class DragAndDropIndexComponent implements OnInit {
  dragAndDropConfig = buildDragAndDropConfig();
  dragAndDropValues: number[] = [];
  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private _hhtp: HttpClient,
    private _config: ConfigService,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.loadDataClickHandler();
  }

  public loadDataClickHandler(): void {
    this._hhtp
      .get<{ list: number[] }>(`${this._config.apiUrl}/moviesData`)
      .pipe(
        delay(2500),
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe({
        next: ({ list }) => {
          this.dragAndDropValues = list;
          // this.isLoading$.next(false);
        },
        error: (error) => {
          // this.isLoading$.next(false);
          throw error;
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
