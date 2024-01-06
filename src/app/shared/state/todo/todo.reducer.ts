import { createReducer, on } from '@ngrx/store';
import { ITodoState } from './todo.state';
import { AddTodo, ToggleCompleteTodo } from './todo.actions';
import { Todo } from '@shared/models/todo.model';
import { addTodoHelper, toogleTodoCompleteHelper } from './todo.utils';

export const initialState: ITodoState = {
  entities: [new Todo({ description: 'Limpiar ventanas' })],
};

export const todoFeatureKey = 'todo';

export const todoReducer = createReducer(
  initialState,
  on(AddTodo, (state, { todo }) => ({
    ...state,
    entities: [...addTodoHelper(todo, state.entities)],
  })),
  on(ToggleCompleteTodo, (state, { id }) => ({
    ...state,
    entities: [...toogleTodoCompleteHelper(id, state.entities)],
  }))
);
