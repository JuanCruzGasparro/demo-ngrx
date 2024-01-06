import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '@shared/models/todo.model';
import { MaterialModule } from '@shared/modules/material.module';
import { AddTodo, ToggleCompleteTodo } from '@shared/state/todo/todo.actions';
import { selectTodoEntities } from '@shared/state/todo/todo.selectors';
import { ITodoState } from '@shared/state/todo/todo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-index',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './todo-index.component.html',
  styleUrl: './todo-index.component.scss',
})
export class TodoIndexComponent implements OnInit {
  public todoDescription = '';

  public todoEntities$!: Observable<Todo[]>;

  constructor(private _store: Store<ITodoState>) {}

  ngOnInit(): void {
    this.todoEntities$ = this._store.select(selectTodoEntities);
  }

  addTodoHandler(): void {
    if (!this.todoDescription) return;
    this._store.dispatch(
      AddTodo({ todo: new Todo({ description: this.todoDescription }) })
    );
    this.todoDescription = '';
  }

  toggleTodoCompleteHandler(id?: string): void {
    if (!id) return;
    this._store.dispatch(ToggleCompleteTodo({ id }));
  }
}
