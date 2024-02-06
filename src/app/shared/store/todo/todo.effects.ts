import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { TodoService } from '@shared/services/todo/todo.service';

import { TodoActions } from './todo.actions';
import { Todo } from './todo.model';

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
      ),
      tap((res) => {
        console.log(res);
      })
    )
  );

  // addTodo$ = createEffect(() =>
  //   this._actions$.pipe(
  //     ofType(TodoActionTypes.AddTodo),
  //     exhaustMap(({ todo }) =>
  //       this._todoService.create(todo).pipe(
  //         map((todo: Todo) => AddTodoSuccess({ todo })),
  //         catchError((error) => of(AddTodoError({ error })))
  //       )
  //     )
  //   )
  // );

  // updateTodo$ = createEffect(() =>
  //   this._actions$.pipe(
  //     ofType(TodoActionTypes.UpdateTodo),
  //     exhaustMap(({ todo }) =>
  //       this._todoService.update(todo).pipe(
  //         map(({ todo }) => UpdateTodoSuccess({ todo })),
  //         catchError((error) => of(UpdateTodoError({ error })))
  //       )
  //     )
  //   )
  // );

  constructor(private _actions$: Actions, private _todoService: TodoService) {}
}
