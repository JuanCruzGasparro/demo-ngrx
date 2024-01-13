import { Timestamps } from '@shared/utils/timestamps';

export class Todo extends Timestamps {
  id?: string;
  description: string;
  isCompleted?: boolean;

  constructor({ id, description, isCompleted = false }: Todo) {
    super();
    this.id = id;
    this.description = description;
    this.isCompleted = isCompleted;
  }
}
