import { Injectable } from '@angular/core';
import { Todo } from '@shared/models/todo.model';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

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

  public create(todo: Todo): Observable<any> {
    return this._http.post<any>(this._url, todo);
  }

  public update(todo: Todo): Observable<any> {
    return this._http.put<any>(`${this._url}/${todo.id}`, todo);
  }
}
