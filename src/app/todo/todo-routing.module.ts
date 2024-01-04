import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';

const routes: Routes = [
  {
    path: '',
    component: TodoIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
