
import { createStore, applyMiddleware } from 'redux';

import middleware from './middleware';
import rootReducer from './reducers';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(...middleware)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
