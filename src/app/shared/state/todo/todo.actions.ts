import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum TodoActionTypes {
  FetchTodos = '[TODO] Fetch Todos',
  FetchTodosSuccess = '[TODO] Fetch Todos Success',
  FetchTodosError = '[TODO] Fetch Todos Error',

  AddTodo = '[TODO] Add Todo',
  RemoveTodo = '[TODO] Remove Todo',
  ToggleCompleteTodo = '[TODO] Mark As Complete',
}

export const AddTodo = createAction(
  TodoActionTypes.AddTodo,
  props<{ todo: Todo }>()
);

export const ToggleCompleteTodo = createAction(
  TodoActionTypes.ToggleCompleteTodo,
  props<{ id: string }>()
);

export const FetchTodos = createAction(TodoActionTypes.FetchTodos);
export const FetchTodosSuccess = createAction(
  TodoActionTypes.FetchTodosSuccess,
  props<{ entities: Todo[] }>()
);
export const FetchTodosError = createAction(
  TodoActionTypes.FetchTodosError,
  props<{ error: any }>()
);
