import { createReducer, on } from '@ngrx/store';
import { ITodoState } from './todo.state';
import {
  AddTodo,
  FetchTodosError,
  FetchTodosSuccess,
  ToggleCompleteTodo,
} from './todo.actions';
import { addTodoHelper, toogleTodoCompleteHelper } from './todo.utils';

export const initialState: ITodoState = {
  entities: [],
  error: null,
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
  })),
  on(FetchTodosSuccess, (state, { entities }) => ({
    ...state,
    entities,
  })),
  on(FetchTodosError, (state, { error }) => ({
    ...state,
    error,
  }))
);
