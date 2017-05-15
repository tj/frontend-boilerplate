
import { CREATE_TASK, REMOVE_TASK } from './actionTypes';

export function createTask(name) {
  const id = (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);

  return { type: CREATE_TASK, id, name };
}

export function removeTask(id) {
  return { type: REMOVE_TASK, id };
}
