// @flow

import { CREATE_TASK, REMOVE_TASK } from './actionTypes';

/**
 * Create a task based on the `name` attribute
 * @param  {String} name Name for the task
 * @return {Object}      Object of the action for redux
 */
export function createTask(name: string): Object {
  // Create a unique ID for the task, so you don't need to do this
  const id = (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);

  return { type: CREATE_TASK, id, name };
}

/**
 * Remove a task based on the `id` attribute
 * @param  {String} id ID of the task
 * @return {Object}    Object of the action for redux
 */
export function removeTask(id: string): Object {
  return { type: REMOVE_TASK, id };
}
