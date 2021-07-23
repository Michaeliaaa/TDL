import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TodoActions,
  TOGGLE_DONE,
} from './actionTypes';

export type Todo = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export interface TodoState {
  todos: Todo[];
}

const initialState = {
  todos: [],
};

export const TodoReducer = (
  state: TodoState = initialState,
  action: TodoActions,
) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = Object.assign({}, action.payload, action.payload.id);
      return {...state, todos: [newTodo, ...state.todos]};
    }
    case DELETE_TODO: {
      const updatedTodo = state.todos.filter(
        todo => todo.id !== action.payload.id,
      );
      return {
        ...state,
        todos: updatedTodo,
      };
    }
    case EDIT_TODO: {
      const editedTodo = state.todos.find(
        todo => todo.id === action.payload.id,
      );

      if (editedTodo) {
        editedTodo.description = action.payload.description;
      }

      const updatedTodo = state.todos.slice();

      return {
        ...state,
        todos: updatedTodo,
      };
    }
    case TOGGLE_DONE: {
      const updatedTask = state.todos.find(
        todo => todo.id === action.payload.id,
      );

      if (updatedTask) {
        updatedTask.isCompleted = !updatedTask.isCompleted;
      }

      const updatedTasks = state.todos.slice();

      return {
        ...state,
        todos: updatedTasks,
      };
    }
    default: {
      return state;
    }
  }
};
