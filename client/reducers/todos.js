import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/action_names';
import { handleActions } from 'redux-actions'

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}]

export default handleActions({
  [ADD_TODO] (state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.payload
    }, ...state]
  },

  [DELETE_TODO] (state, action) {
    return state.filter(todo => todo.id !== action.payload )
  },

  [EDIT_TODO] (state, action) {
    return state.map(todo => {
      return todo.id === action.payload.id
        ? { ...todo, text: action.payload.text }
        : todo
    })
  },

  [COMPLETE_TODO] (state, action) {
    return state.map(todo => {
      return todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    })
  },

  [COMPLETE_ALL] (state, action) {
    const areAllMarked = state.every(todo => todo.completed)
    return state.map(todo => {
      return {
        ...todo,
        completed: !areAllMarked
      }
    })
  },

  [CLEAR_COMPLETED] (state, action) {
    return state.filter(todo => todo.completed === false)
  }
}, initialState)
