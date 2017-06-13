
import { Record, List } from 'immutable';

import { CREATE_TASK, REMOVE_TASK } from './actionTypes';
import { Task } from './task';

/*
 * Immutable Record for the initial state tree for `tasks`. Beside being
 * immutable it gives us some cool features like merging and stuff.
 */
export const TasksState = new Record({
  loading: true,
  list: new List(),
});

/*
 * The reducer is called *every* time redux receives a new action.
 * Currently supported actions by this reducer are:
 *  - CREATE_TASK
 *  - REMOVE_TASK
 */
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
