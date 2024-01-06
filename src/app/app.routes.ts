import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { TodoIndexComponent } from './todo/todo-index/todo-index.component';
import { provideState } from '@ngrx/store';
import { todoFeatureKey, todoReducer } from '@shared/state/todo/todo.reducer';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoIndexComponent,
    providers: [provideState({ name: todoFeatureKey, reducer: todoReducer })],
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
