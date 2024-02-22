import { Observable } from 'rxjs';

export interface ICollectionService<T> {
  get: () => Observable<T[]>;
  getById: (entityId: string | number) => Observable<T>;
  post: (entity: T) => Observable<void>;
  put: (entity: T) => Observable<void>;
  patch: (entity: T) => Observable<void>;
  delete: (entityId: string | number) => Observable<void>;
}
