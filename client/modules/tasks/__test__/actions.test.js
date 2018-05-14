// @flow
import { CREATE_TASK, REMOVE_TASK } from '../actionTypes'
import { createTask, removeTask } from '../actions'

describe('tasks actions', () => {
  describe('createTask', () => {
    let action

    beforeAll(() => {
      action = createTask('Random Name')
    })

    it('uses the right action type', () => {
      expect(action.type).toEqual(CREATE_TASK)
    })

    it('generates a random id', () => {
      expect(action.payload).toHaveProperty('id')
    })

    it('returns the right action', () => {
      expect(action.payload).toHaveProperty('name', 'Random Name')
    })
  })

  describe('removeTask', () => {
    let action

    beforeAll(() => {
      action = removeTask('1')
    })

    it('uses the right action type', () => {
      expect(action.type).toEqual(REMOVE_TASK)
    })

    it('has the right id', () => {
      expect(action.id).toEqual('1')
    })
  })
})
