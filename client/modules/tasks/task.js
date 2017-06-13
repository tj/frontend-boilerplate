
import { Record } from 'immutable';

/*
 * Create a new immutable record for `Task`, so that every Task ever in the
 * redux state is going to look like this. You can also define "defaults" here.
 */
export const Task = new Record({
  id: null,
  title: null,
  completed: false,
});
