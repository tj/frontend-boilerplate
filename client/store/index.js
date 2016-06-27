import { createStore, applyMiddleware } from 'redux';
import { logger } from '../middleware';
import rootReducer from '../reducers';
import { getStoredState, persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import assign from 'object-assign';

export default function configure(initialState = {}, callback) {
  const persistConfig = { transforms: [immutableTransform({})] };
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;
  const createStoreWithMiddleware = applyMiddleware(
    logger
  )(create);

  getStoredState(persistConfig, (err, cachedState) => {
    const store = createStoreWithMiddleware(rootReducer, assign({}, initialState, cachedState));

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      })
    }
    persistStore(store, persistConfig, () => {
      console.log('rehydration complete');
      if (callback) callback(store);
    });
  });
}
