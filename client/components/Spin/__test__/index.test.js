import React from 'react'
import { mount } from 'enzyme'

import Spin from '../'

describe('<Spin />', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(<Spin />)
  })

  it('has spinner instance', () => {
    expect(wrapper.instance()).toHaveProperty('spinner')
  })

  it('has `container` property', () => {
    expect(wrapper.instance()).toHaveProperty('container')
  })

  describe('lifecycles', () => {
    it('calls `spin()` when `componentWillReceiveProps` with right props', () => {
      const spin = jest.fn()

      wrapper = mount(<Spin stopped />)
      wrapper.instance().spinner.spin = spin
      wrapper.setProps({ stopped: false })

      expect(spin).toHaveBeenCalled()
    })

    it('calls `stop()` when `componentWillReceiveProps` with right props', () => {
      const stop = jest.fn()

      wrapper.instance().spinner.stop = stop
      wrapper.setProps({ stopped: true })

      expect(stop).toHaveBeenCalled()
    })

    it('calls `stop()` when `componentWillUnmount`', () => {
      const stop = jest.fn()

      wrapper.instance().spinner.stop = stop
      wrapper.unmount()

      expect(stop).toHaveBeenCalled()
    })
  })
})
