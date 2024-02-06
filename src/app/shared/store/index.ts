import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';

export const stateFeatureKey = 'state';

export interface State {
  [fromTodo.todosFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromTodo.todosFeatureKey]: fromTodo.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
