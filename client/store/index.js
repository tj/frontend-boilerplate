
import { createStore, applyMiddleware, compose } from 'redux'

import { logger } from '../middleware'
import rootReducer from '../reducers'

const enhancer = compose(
  applyMiddleware(logger),
  window.devToolsExtension && window.devToolsExtension()
)

export default function configure(initialState) {

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
