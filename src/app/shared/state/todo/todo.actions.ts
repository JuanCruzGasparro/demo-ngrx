import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum TodoActionTypes {
  FetchTodos = '[TODO] Fetch Todos',
  FetchTodosSuccess = '[TODO] Fetch Todos Success',
  FetchTodosError = '[TODO] Fetch Todos Error',

  AddTodo = '[TODO] Add Todo',
  AddTodoSuccess = '[TODO] Add Todo Success',
  AddTodoError = '[TODO] Add Todo Error',

  UpdateTodo = '[TODO] Update Todo',
  UpdateTodoSuccess = '[TODO] Update Todo Success',
  UpdateTodoError = '[TODO] Update Todo Error',

  RemoveTodo = '[TODO] Remove Todo',
  RemoveTodoSuccess = '[TODO] Remove Todo Success',
  RemoveTodoError = '[TODO] Remove Todo Error',
}

export const AddTodo = createAction(
  TodoActionTypes.AddTodo,
  props<{ todo: Todo }>()
);
export const AddTodoSuccess = createAction(
  TodoActionTypes.AddTodoSuccess,
  props<{ todo: Todo }>()
);
export const AddTodoError = createAction(
  TodoActionTypes.AddTodoError,
  props<{ error: any }>()
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

export const UpdateTodo = createAction(
  TodoActionTypes.UpdateTodo,
  props<{ todo: Todo }>()
);
export const UpdateTodoSuccess = createAction(
  TodoActionTypes.UpdateTodoSuccess,
  props<{ todo: Todo }>()
);
export const UpdateTodoError = createAction(
  TodoActionTypes.UpdateTodoError,
  props<{ error: any }>()
);
