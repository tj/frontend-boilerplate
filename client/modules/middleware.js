// @flow
import thunk from 'redux-thunk'
import routerMiddleware from 'react-router-redux/es/middleware'
import type { Middleware } from 'redux'

import history from './history'

const router: Middleware<{}, mixed> = routerMiddleware(history)

export default [thunk, router]
