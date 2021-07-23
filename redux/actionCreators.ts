import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from './actionTypes';

export const addTodo = (id: string, description: string, isCompleted: boolean) => ({
  type: ADD_TODO,
  payload: {id, description, isCompleted},
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: {id},
});

export const editTodo = (id: string, description: string) => ({
  type: EDIT_TODO,
  payload: {id, description},
});

export const toggleDone = (id: string) => ({
  type: TOGGLE_DONE,
  payload: {id},
});