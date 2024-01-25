import { Todo } from '@shared/models/todo.model';

export const addTodoHelper = (todo: Todo, list: Todo[]): Todo[] => [
  ...list,
  todo,
];

export const updateTodoHelper = (updatedItem: Todo, list: Todo[]): Todo[] => {
  return [
    ...list.map((todo) => (todo.id === updatedItem.id ? updatedItem : todo)),
  ];
};
