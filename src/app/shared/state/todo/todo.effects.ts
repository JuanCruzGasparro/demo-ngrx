import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '@shared/services/todo/todo.service';
import { FetchTodosSuccess, TodoActionTypes } from './todo.actions';
import { exhaustMap, map, EMPTY, catchError } from 'rxjs';

@Injectable()
export class TodoEffects {
  fetchTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoActionTypes.FetchTodos),
      exhaustMap(() =>
        this._todoService.getAll().pipe(
          map((entities) => FetchTodosSuccess({ entities })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private _actions$: Actions, private _todoService: TodoService) {}
}
