import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';

export const stateFeatureKey = 'state';

export interface State {
  [fromTodo.todoFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
