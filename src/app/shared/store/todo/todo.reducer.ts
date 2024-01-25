import { createReducer, on } from '@ngrx/store';
import { TodoActions } from '@shared/store/todo/todo.actions';

export const todoFeatureKey = 'todo';

export interface State {
  entities: any[];
}

export const initialState: State = {
  entities: [1, 2, 3, 4],
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({ ...state }))
);
