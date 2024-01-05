import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TodoIndexComponent } from './components/todo-index/todo-index.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [TodoIndexComponent],
  imports: [CommonModule, TodoRoutingModule, SharedModule, MaterialModule],
})
export class TodoModule {}
