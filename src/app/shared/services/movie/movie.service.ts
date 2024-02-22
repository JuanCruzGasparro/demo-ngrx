import { Injectable } from '@angular/core';
import { ICollectionService } from '@shared/interfaces/collection-service';
import { Movie } from '@shared/models/movie.model';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService implements ICollectionService<Movie> {
  private readonly _url = `${this._configService.apiUrl}/movies`;

  constructor(
    private _configService: ConfigService,
    private _http: HttpClient
  ) {}

  get(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this._url);
  }

  getById(entityId: string | number): Observable<Movie> {
    return this._http.get<Movie>(`${this._url}/${entityId}`);
  }

  post(entity: Movie): Observable<void> {
    return this._http.post<void>(this._url, entity);
  }

  put(entity: Movie): Observable<void> {
    return this._http.put<void>(this._url, entity);
  }

  patch(entity: Movie): Observable<void> {
    return this._http.patch<void>(this._url, entity);
  }

  delete(entityId: string | number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${entityId}`);
  }
}
