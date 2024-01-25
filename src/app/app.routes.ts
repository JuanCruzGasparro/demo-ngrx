import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { TodoIndexComponent } from './todo/todo-index/todo-index.component';
import { provideState } from '@ngrx/store';
import {
  todoFeatureKey,
  todoReducer,
} from '@shared/old_state/todo/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from '@shared/old_state/todo/todo.effects';
import { reducers } from '@shared/store';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoIndexComponent,
  },
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
