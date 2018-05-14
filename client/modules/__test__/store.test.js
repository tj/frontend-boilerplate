// @flow
import { store, configureStore } from '../store'

describe('store', () => {
  it('should be set up properly', () => {
    expect(store).toHaveProperty('getState')
    expect(store).toHaveProperty('dispatch')
  })

  it('should call window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', () => {
    /* eslint-disable no-underscore-dangle */
    const compose = jest.fn()
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = compose
    configureStore()
    expect(compose).toHaveBeenCalled()
    /* eslint-enable */
  })
})
