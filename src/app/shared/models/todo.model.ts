import { Timestamps } from '@shared/utils/timestamps';
import { getUUID } from '@shared/utils/uuid.utils';

export class Todo extends Timestamps {
  id?: string;
  description: string;
  isCompleted?: boolean;

  constructor({ id, description, isCompleted = false }: Todo) {
    super();
    this.id = id ?? getUUID();
    this.description = description;
    this.isCompleted = isCompleted;
  }
}
