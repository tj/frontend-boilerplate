// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux/reducer'
import type { CombinedReducer } from 'redux'

import { reducer as tasksReducer } from './tasks'
import type { Action } from './types'

export const rootReducer: CombinedReducer<any, Action> = combineReducers({
  router: routerReducer,
  tasks: tasksReducer,
})
