
import { Record, List } from 'immutable';

import { CREATE_TASK, REMOVE_TASK } from './actionTypes';
import { Task } from './task';

export const TasksState = new Record({
  loading: true,
  list: new List(),
});

export function tasksReducer(state = new TasksState(), { type, ...action }) {
  switch (type) {
    case CREATE_TASK:
      const newTask = new Task(action);
      return state.update('list', list => list.push(newTask));
    case REMOVE_TASK:
      return state.update('list', list =>
        list.filter(task => task.get('id') === action.id),
      );
    default:
      return state;
  }
}
