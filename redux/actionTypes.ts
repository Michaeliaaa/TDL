import {Todo} from './todoReducer';

export const ADD_TODO = 'todo/add';
export const DELETE_TODO = 'todo/delete';
export const EDIT_TODO = 'todo/edit';
export const TOGGLE_DONE = 'todo/toggle';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: Todo;
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: {id: number; description: string};
}

interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: {id: number};
}

export type TodoActions =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ToggleDoneAction;
