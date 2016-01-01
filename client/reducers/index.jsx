
import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'
import todos from './todos'

export default combineReducers({
  routing,
  todos
})
