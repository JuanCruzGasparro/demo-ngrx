import { Signal } from '@angular/core';

export interface IDragAndDropFilter<T> {
  readonly _searchTerm: Signal<T>;
}
