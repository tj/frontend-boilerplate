import { createAction } from 'redux-actions';
import { ACTION_TODO } from '../constants';

export const addTodo = createAction(ACTION_TODO.ADD);
export const deleteTodo = createAction(ACTION_TODO.DELETE);
export const editTodo = createAction(ACTION_TODO.EDIT);
export const completeTodo = createAction(ACTION_TODO.COMPLETE);
export const completeAll = createAction(ACTION_TODO.COMPLETE_ALL);
export const clearCompleted = createAction(ACTION_TODO.CLEAR_COMPLETED);
