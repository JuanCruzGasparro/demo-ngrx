import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { State, adapter, todosFeatureKey } from './todo.reducer';

export const selectTodoFeature = createFeatureSelector<State>(todosFeatureKey);

// export const selectTodoEntities = createSelector(
//   selectTodoFeature,
//   (state: State) => state.entities
// );

const { selectAll, selectEntities } = adapter.getSelectors();

export const selectTodoDictionary = selectEntities;

export const selectTodos = createSelector(selectTodoFeature, selectAll);

export const selectTodosError = createSelector(
  selectTodoFeature,
  (state) => state.error
);

export const selectTodosIsLoading = createSelector(
  selectTodoFeature,
  (state) => state.isLoading
);
