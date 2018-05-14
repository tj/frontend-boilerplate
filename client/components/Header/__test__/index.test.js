import React from 'react'
import { shallow } from 'enzyme'

import Header from '../'

describe('<Header />', () => {
  it('should have an logo in a `div`', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
