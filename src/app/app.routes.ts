import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from '@shared/store/todo/todo.effects';
import { TodoIndexComponent } from './demos/todo/todo-index/todo-index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'demos',
    children: [
      {
        path: 'todos',
        component: TodoIndexComponent,
        providers: [provideEffects(TodoEffects)],
      },
    ],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
