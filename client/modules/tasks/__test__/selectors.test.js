// @flow
import { getTasks } from '../selectors'

describe('tasks selectors', () => {
  it('returns tasks tree', () => {
    const state = { tasks: {} }

    expect(getTasks(state)).toBeInstanceOf(Object)
  })

  it('returns nothing with empty state', () => {
    const state = {}

    expect(getTasks(state)).toBeUndefined()
  })

  it('returns nothing with undefined attribute', () => {
    expect(() => getTasks()).toThrow(TypeError)
  })
})
