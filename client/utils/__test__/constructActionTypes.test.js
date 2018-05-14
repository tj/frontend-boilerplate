// @flow
import constructActionTypes from '../constructActionTypes'

describe('constructActionTypes', () => {
  let types

  beforeAll(() => {
    types = constructActionTypes('A', 'B', 'C')
  })

  describe('start', () => {
    let action

    beforeAll(() => {
      action = types.start()
    })

    it('only has property type', () => {
      expect(action).toHaveProperty('type')
      expect(action).not.toHaveProperty('payload')
    })

    it('has the right type', () => {
      expect(action.type).toEqual('A')
    })
  })

  describe('success', () => {
    let payload
    let action

    beforeAll(() => {
      payload = { success: true }
      action = types.success(payload)
    })

    it('has the right properties', () => {
      expect(action).toHaveProperty('type')
      expect(action).toHaveProperty('payload')
    })

    it('has the right type', () => {
      expect(action.type).toEqual('B')
    })

    it('returns a payload', () => {
      expect(action).toHaveProperty('payload')
      expect(action.payload).toEqual(payload)
    })

    it('has ability to add stuff to action', () => {
      const customAction = types.success(payload, { another: true })

      expect(customAction).toHaveProperty('another')
      expect(customAction.another).toEqual(true)
    })
  })

  describe('failure', () => {
    let payload
    let action

    beforeAll(() => {
      payload = { success: true }
      action = types.failure(payload)
    })

    it('has the right properties', () => {
      expect(action).toHaveProperty('type')
      expect(action).toHaveProperty('payload')
    })

    it('has the right type', () => {
      expect(action.type).toEqual('C')
    })

    it('returns a payload', () => {
      expect(action).toHaveProperty('payload')
      expect(action.payload).toEqual(payload)
    })

    it('has ability to add stuff to action', () => {
      const customAction = types.failure(payload, { another: true })

      expect(customAction).toHaveProperty('another')
      expect(customAction.another).toEqual(true)
    })
  })
})
