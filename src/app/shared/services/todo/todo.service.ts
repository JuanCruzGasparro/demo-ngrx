import { Injectable } from '@angular/core';
import { Todo } from '@shared/models/todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  public getAll(): Observable<Todo[]> {
    return of([
      new Todo({ description: 'Limpiar ventanas' }),
      new Todo({ description: 'Comprar servilletas' }),
      new Todo({ description: 'Lavar auto' }),
    ]);
  }
}
