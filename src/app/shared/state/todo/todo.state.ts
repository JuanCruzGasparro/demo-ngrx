import { AppError } from '@shared/models/app-error.model';
import { Todo } from '../../models/todo.model';
import { IBaseState } from '../base-state.interface';

export interface ITodoState extends IBaseState<Todo, AppError | null> {}
