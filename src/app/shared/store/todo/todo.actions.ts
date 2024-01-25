import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ data: unknown }>(),
    'Load Todos Failure': props<{ error: unknown }>(),
  },
});
