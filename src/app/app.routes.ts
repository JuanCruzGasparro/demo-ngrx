import { Routes } from '@angular/router';

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
];
