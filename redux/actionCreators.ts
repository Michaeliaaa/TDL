import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_DONE } from './actionTypes';

export const addTodo = (description: string) => ({
  type: ADD_TODO,
  payload: {description},
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: {id},
});

export const editTodo = (id: number, description: string) => ({
  type: EDIT_TODO,
  payload: {id, description},
});

export const toggleDone = (id: number) => ({
  type: TOGGLE_DONE,
  payload: {id},
});