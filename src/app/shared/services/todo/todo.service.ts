import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { TodoFilterParameter } from '@shared/models/todo-filter-parameter.model';
import { Todo } from '@shared/store/todo/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly _url = `${this._configService.apiUrl}/todos`;

  constructor(
    private _configService: ConfigService,
    private _http: HttpClient
  ) {}

  public getAll(): Observable<Todo[]> {
    return this._http.get<Todo[]>(this._url);
  }

  public get(filter: TodoFilterParameter): Observable<Todo> {
    const parameters = filter.toString();
    console.log('TodoService get: parameter', parameters);
    return this._http.get<Todo>(`${this._url}`);
    // return this._http.get<Todo>(`${this._url}?${parameters}`);
  }

  public create(todo: Todo): Observable<any> {
    return this._http.post<any>(this._url, todo);
  }

  public update(todo: Todo): Observable<any> {
    return this._http.put<any>(`${this._url}/${todo.id}`, todo);
  }
}
