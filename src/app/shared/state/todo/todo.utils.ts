import { Todo } from '@shared/models/todo.model';

export const addTodoHelper = (todo: Todo, list: Todo[]): Todo[] => [
  ...list,
  todo,
];

export const toogleTodoCompleteHelper = (
  targetId: string,
  list: Todo[]
): Todo[] => {
  return list.map((entity) => {
    console.log(entity);
    return entity.id === targetId
      ? { ...entity, isCompleted: !entity.isCompleted }
      : entity;
  });
};
