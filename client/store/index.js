
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import {enableBatching} from 'redux-batched-actions'
export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
  )(create)

  const store = createStoreWithMiddleware(enableBatching(rootReducer), initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
