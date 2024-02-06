import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { TodoFilterParameter } from '@shared/models/todo-filter-parameter.model';
import { MaterialModule } from '@shared/modules/material.module';
import { TodoService } from '@shared/services/todo/todo.service';
import { Observable } from 'rxjs';
import { State } from '@shared/store/todo/todo.reducer';
import { Todo } from '@shared/store/todo/todo.model';
import { TodoActions } from '@shared/store/todo/todo.actions';
import { selectTodos } from '@shared/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-index',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './todo-index.component.html',
  styleUrl: './todo-index.component.scss',
})
export class TodoIndexComponent implements OnInit {
  public todoDescription = '';

  public todos$!: Observable<Todo[]>;
  public todosError$!: Observable<any>;

  constructor(private _store: Store<State>) {}

  ngOnInit(): void {
    // const filter = new TodoFilterParameter();
    // filter.isCompleted = true;
    // this._todoService.get(filter)
    this.todos$ = this._store.select(selectTodos);
    this._fetchTodos();
  }

  addTodoHandler(): void {
    if (!this.todoDescription) return;
    this.todoDescription = '';
  }

  toggleTodoCompleteHandler(isCompleted: boolean, todo: Todo): void {
    if (!todo) return;
  }

  private _fetchTodos(): void {
    console.log('fetchTodos');
    this._store.dispatch(TodoActions.loadTodos());
  }
}
