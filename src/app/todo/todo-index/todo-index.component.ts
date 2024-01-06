import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Todo } from '@shared/models/todo.model';
import { MaterialModule } from '@shared/modules/material.module';
import { AddTodo, ToggleCompleteTodo } from '@shared/state/todo/todo.actions';
import { selectTodoEntities } from '@shared/state/todo/todo.selectors';
import { ITodoState } from '@shared/state/todo/todo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-index',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo-index.component.html',
  styleUrl: './todo-index.component.css',
})
export class TodoIndexComponent implements OnInit {
  public todoEntities$!: Observable<Todo[]>;

  constructor(private _store: Store<ITodoState>) {}

  ngOnInit(): void {
    this.todoEntities$ = this._store.select(selectTodoEntities);
  }

  addTodoHandler(description: string): void {
    const todo = new Todo({ description });
    this._store.dispatch(AddTodo({ todo }));
  }

  toggleTodoCompleteHandler(id?: string): void {
    if (!id) return;
    this._store.dispatch(ToggleCompleteTodo({ id }));
  }
}
