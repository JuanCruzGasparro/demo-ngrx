import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { TodoIndexComponent } from './todo/todo-index/todo-index.component';
import { provideState } from '@ngrx/store';
import { todoFeatureKey, todoReducer } from '@shared/state/todo/todo.reducer';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'todo',
    component: TodoIndexComponent,
    providers: [provideState({ name: todoFeatureKey, reducer: todoReducer })],
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { hideTopBar: true } },
];
