// @flow
export type Task = {
  id: string,
  name: string,
}

export type Action = {
  type: string,
  id?: string,
  payload?: Task,
}

export type State = {
  loading: boolean,
  list: Array<Task>,
}
