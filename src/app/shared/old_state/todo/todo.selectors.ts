import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoState } from './todo.state';
import { todoFeatureKey } from './todo.reducer';

export const selectTodoFeature =
  createFeatureSelector<ITodoState>(todoFeatureKey);

export const selectTodoEntities = createSelector(
  selectTodoFeature,
  (state: ITodoState) => state.entities
);
