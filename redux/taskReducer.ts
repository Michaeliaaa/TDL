import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  GET_TASKS,
  TaskActions,
  TOGGLE_DONE,
} from './actionTypes';

export type Task = {
  id: number;
  description: string;
  done: boolean;
};

export interface TaskState {
  tasks: Task[];
}

const initialState = {
  tasks: [],
};

export const TaskReducer = (
  state: TaskState = initialState,
  action: TaskActions,
) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTask = Object.assign({}, action.payload, {id: Math.random()});
      return {...state, tasks: [newTask, ...state.tasks]};
    }
    case DELETE_TODO: {
      const updatedTasks = state.tasks.filter(
        task => task.id !== action.payload.id,
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case EDIT_TODO: {
      const editedTask = state.tasks.find(
        task => task.id === action.payload.id,
      );

      if (editedTask) {
        editedTask.description = action.payload.description;
      }

      const updatedTasks = state.tasks.slice();

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case TOGGLE_DONE: {
      const updatedTask = state.tasks.find(
        task => task.id === action.payload.id,
      );

      if (updatedTask) {
        updatedTask.done = !updatedTask.done;
      }

      const updatedTasks = state.tasks.slice();

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case GET_TASKS: {
      return {...state};
    }
    default: {
      return state;
    }
  }
};
