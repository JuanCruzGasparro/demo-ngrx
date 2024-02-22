import { Observable } from 'rxjs';
import { DragAndDropIdType } from './drag-and-drop-core.interface';

export interface IDragAndDropService<T extends DragAndDropIdType> {
  get: () => Observable<{ id: T; description: string }[]>;
}
