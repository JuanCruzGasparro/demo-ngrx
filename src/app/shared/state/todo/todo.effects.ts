import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '@shared/services/todo/todo.service';
import {
  AddTodoError,
  AddTodoSuccess,
  FetchTodosError,
  FetchTodosSuccess,
  TodoActionTypes,
  UpdateTodoError,
  UpdateTodoSuccess,
} from './todo.actions';
import { exhaustMap, map, EMPTY, catchError, of } from 'rxjs';
import { Todo } from '@shared/models/todo.model';

@Injectable()
export class TodoEffects {
  fetchTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoActionTypes.FetchTodos),
      exhaustMap(() =>
        this._todoService.getAll().pipe(
          map((entities) => FetchTodosSuccess({ entities })),
          catchError((error) => of(FetchTodosError({ error })))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoActionTypes.AddTodo),
      exhaustMap(({ todo }) =>
        this._todoService.create(todo).pipe(
          map((todo: Todo) => AddTodoSuccess({ todo })),
          catchError((error) => of(AddTodoError({ error })))
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoActionTypes.UpdateTodo),
      exhaustMap(({ todo }) =>
        this._todoService.update(todo).pipe(
          map(({ todo }) => UpdateTodoSuccess({ todo })),
          catchError((error) => of(UpdateTodoError({ error })))
        )
      )
    )
  );

  constructor(private _actions$: Actions, private _todoService: TodoService) {}
}
