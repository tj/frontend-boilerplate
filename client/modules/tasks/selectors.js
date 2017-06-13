
import { createSelector } from 'reselect';

/*
 * Select the tasks state from the whole redux state-tree
 */
export const getTasks = createSelector(
  state => state.tasks,
);
