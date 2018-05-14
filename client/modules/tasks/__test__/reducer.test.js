// @flow
import { reducer, initialState } from '../reducer'
import { CREATE_TASK, REMOVE_TASK } from '../actionTypes'

describe('tasks reducer', () => {
  it('returns `initialState` on initial call', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('adds `action.payload` to `list` on `CREATE_TASK`', () => {
    const state = { list: [] }
    const action = { type: CREATE_TASK, payload: { id: '1', name: 'Test' } }

    expect(reducer(state, action)).toHaveProperty('list', [action.payload])
  })

  it('adds `action.payload` to `list` on `REMOVE_TASK`', () => {
    const state = { list: [{ id: '1', name: 'Test' }] }
    const action = { type: REMOVE_TASK, id: '1' }

    expect(reducer(state, action)).toHaveProperty('list', [])
  })
})
