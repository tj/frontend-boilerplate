// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import type { Store } from 'redux'

import middleware from './middleware'
import { rootReducer } from './reducers'
import type { State, Action } from './types'

export const configureStore = (): Store<State, Action> => {
  /*
   * If `redux-dev-tools` are available the `compose` function from those is used
   * otherwise the `compose` function from `redux` is used.
   */

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers: Function = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  /*
   * Apply the needed middleware and reducers to the store and create the store
   * for later export
   */

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
}

export const store: Store<State, Action> = configureStore()
