import { Timestamps } from '@shared/utils/timestamps';
import { Todo } from '../../models/todo.model';

export interface ITodoState {
  entities: Todo[];
  error: any;
}
