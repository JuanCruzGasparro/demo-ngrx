import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
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
