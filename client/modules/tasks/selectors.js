
import { createSelector } from 'reselect';

export const getTasks = createSelector(
  state => state.tasks,
);
