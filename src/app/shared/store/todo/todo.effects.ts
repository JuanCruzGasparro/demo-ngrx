import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { TodoService } from '@shared/services/todo/todo.service';

import { TodoActions } from './todo.actions';

@Injectable()
export class TodoEffects {
  fetchTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoActions.loadTodos),
      exhaustMap(() =>
        this._todoService.getAll().pipe(
          map((todos) => TodoActions.addTodos({ todos })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        )
      )
    )
  );

  constructor(private _actions$: Actions, private _todoService: TodoService) {}
}
