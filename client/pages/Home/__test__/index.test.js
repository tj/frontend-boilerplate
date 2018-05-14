// @flow
import React from 'react'
import { shallow } from 'enzyme'

import Home from '../'

describe('<Home />', () => {
  it('initializes a correct state', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.state()).toHaveProperty('loading', false)
  })

  it('changes state when button is clicked', () => {
    const wrapper = shallow(<Home />)
    wrapper.find('input').simulate('change')
    expect(wrapper.state()).toHaveProperty('loading', true)
  })
})
