import { getUUID } from '@shared/utils/uuid.utils';

export class Todo {
  id?: string;
  description: string;
  isCompleted?: boolean;

  constructor({ id, description, isCompleted = false }: Todo) {
    this.id = id ?? getUUID();
    this.description = description;
    this.isCompleted = isCompleted;
  }
}
