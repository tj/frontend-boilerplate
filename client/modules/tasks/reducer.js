// @flow
import { CREATE_TASK, REMOVE_TASK } from './actionTypes'
import type { State, Action } from './types'

/*
 * Immutable Record for the initial state tree for `tasks`. Beside being
 * immutable it gives us some cool features like merging and stuff.
 */
export const initialState: State = {
  loading: true,
  list: [],
}

/*
 * The reducer is called *every* time redux receives a new action.
 * Currently supported actions by this reducer are:
 *  - CREATE_TASK
 *  - REMOVE_TASK
 */
export const reducer = (state: State = initialState, { type, ...action }: Action): State => {
  switch (type) {
    case CREATE_TASK:
      return { ...state, list: action.payload ? [...state.list, action.payload] : state.list }
    case REMOVE_TASK:
      return { ...state, list: state.list.filter(task => task.id !== action.id) }
    default:
      return state
  }
}
