import {createStore} from 'redux';
import {TodoReducer} from './todoReducer';

export const store = createStore(TodoReducer);
