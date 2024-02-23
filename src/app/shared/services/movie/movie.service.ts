import { Injectable } from '@angular/core';
import { ICollectionService } from '@shared/interfaces/collection-service';
import { Movie } from '@shared/models/movie.model';
import { Observable, map } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';
import { DragAndDropItem } from '@shared/components/drag-and-drop/interfaces/drag-and-drop-core.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService
  implements ICollectionService<DragAndDropItem<number>>
{
  private readonly _url = `${this._configService.apiUrl}/movies`;

  constructor(
    private _configService: ConfigService,
    private _http: HttpClient
  ) {}

  get(): Observable<Movie[]> {
    return this._http
      .get<Movie[]>(this._url)
      .pipe(
        map((list) =>
          list.map(({ id, ...entity }) => ({ id: Number(id), ...entity }))
        )
      );
  }

  getById(entityId: string | number): Observable<Movie> {
    return this._http
      .get<Movie>(`${this._url}/${entityId}`)
      .pipe(map(({ id, ...entity }) => ({ id: Number(id), ...entity })));
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
