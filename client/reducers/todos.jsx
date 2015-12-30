
import handleActions from '@f/handle-actions'

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}]

export default handleActions({
  'add todo' (state, changes) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: changes.text
    }, ...state]
  },

  'delete todo' (state, changes) {
    return state.filter(todo => todo.id !== changes.id )
  },

  'edit todo' (state, changes) {
    return state.map(todo => {
      return todo.id === changes.id
        ? { ...todo, text: changes.text }
        : todo
    })
  },

  'complete todo' (state, changes) {
    return state.map(todo => {
      return todo.id === changes.id
        ? { ...todo, completed: !todo.completed }
        : todo
    })
  },

  'complete all' (state) {
    const areAllMarked = state.every(todo => todo.completed)
    return state.map(todo => {
      return {
        ...todo,
        completed: !areAllMarked
      }
    })
  },

  'clear complete' (state) {
    return state.filter(todo => todo.completed === false)
  }
}, initialState)
