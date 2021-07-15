import {Task} from './taskReducer';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const TOGGLE_DONE = 'TOGGLE_DONE';
export const GET_TASKS = 'GET_TASKS';

export interface AddTaskAction {
  type: typeof ADD_TODO;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TODO;
  payload: Task;
}

interface EditTaskAction {
  type: typeof EDIT_TODO;
  payload: {id: number; description: string};
}

interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: {id: number};
}

interface GetTaskAction {
  type: typeof GET_TASKS;
}

export type TaskActions =
  | AddTaskAction
  | EditTaskAction
  | DeleteTaskAction
  | ToggleDoneAction
  | GetTaskAction;
