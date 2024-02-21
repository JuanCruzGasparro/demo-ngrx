import { signal } from '@angular/core';
import { IDragAndDropFilter } from '../interfaces/drag-and-drop-filter.interface';

export class DragAndDropFilter implements IDragAndDropFilter<string> {
  readonly _searchTerm = signal<string>('');

  get searchTerm(): string {
    return this._searchTerm();
  }

  set searchTerm(value: string) {
    this._searchTerm.set(value);
  }
}
