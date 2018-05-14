// @flow
import type { State as TasksState } from './tasks/types'

export type State = {
  tasks: TasksState,
}

export type Action = {
  type: string,
  [key: string]: Object | string,
}
