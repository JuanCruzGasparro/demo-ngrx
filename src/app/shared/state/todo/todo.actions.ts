import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

enum TodoActionTypes {
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

// export const RemoveTodo = createAction(
//   TodoActionTypes.RemoveTodo,
//   props<{ id: string }>()
// );
