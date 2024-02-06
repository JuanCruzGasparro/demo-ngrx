import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from './todo.model';

export const TodoActions = createActionGroup({
  source: 'Todo/API',
  events: {
    'Add Todo': props<{ todo: Todo }>(),
    'Upsert Todo': props<{ todo: Todo }>(),
    'Add Todos': props<{ todos: Todo[] }>(),
    'Upsert Todos': props<{ todos: Todo[] }>(),
    'Update Todo': props<{ todo: Update<Todo> }>(),
    'Update Todos': props<{ todos: Update<Todo>[] }>(),
    'Delete Todo': props<{ id: string }>(),
    'Delete Todos': props<{ ids: string[] }>(),
    'Clear Todos': emptyProps(),
    'Load Todos': emptyProps(),
    'Load Todos Failure': props<{ error: any }>(),
    'Set Todos Loading': props<{ isLoading: boolean }>(),
  },
});
