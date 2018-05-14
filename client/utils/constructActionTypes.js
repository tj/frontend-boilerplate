// @flow

export default (start: string, success: string, failure: string) => ({
  start: () => ({ type: start }),
  success: (payload: Object, additionalProps: Object = {}) => ({
    type: success,
    payload,
    ...additionalProps,
  }),
  failure: (payload: Object, additionalProps: Object = {}) => ({
    type: failure,
    payload,
    ...additionalProps,
  }),
})

type SimpleAction = { type: string }
type PayloadAction = { type: string, payload: Object }

export type ConstructedActions = {
  start: () => SimpleAction,
  success: (payload: Object, additionalProps?: Object) => PayloadAction,
  failure: (payload: Object, additionalProps?: Object) => PayloadAction,
}
