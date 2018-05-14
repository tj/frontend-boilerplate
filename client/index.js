// @flow
import React from 'react'
import { render } from 'react-dom'
import ConnectedRouter from 'react-router-redux/es/ConnectedRouter'
import { Provider } from 'react-redux'

import { store } from 'modules/store'
import history from 'modules/history'

import './utils/globalStyles.js'

console.info('Application running in', process.env.NODE_ENV, 'mode.'); // eslint-disable-line

/*
 * Render the React Pages into the actual DOM
 */

const Root: React$StatelessFunctionalComponent<any> = require('pages/Root').default

const MOUNT_NODE: ?HTMLElement = document.getElementById('root')

if (MOUNT_NODE) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  )
} else {
  throw new Error('Could not find MOUNT_NODE')
}
