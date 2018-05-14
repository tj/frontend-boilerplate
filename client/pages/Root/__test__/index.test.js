// @flow
import React from 'react'
import { shallow, mount } from 'enzyme'
import MemoryRouter from 'react-router-dom/es/MemoryRouter'

import { Home, About, NotFound } from 'pages'
import Root from '../'

describe('<Root />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper).toHaveLength(1)
  })

  describe('paths', () => {
    const wrapWithPath = path =>
      mount(
        <MemoryRouter initialEntries={[path]}>
          <Root />
        </MemoryRouter>
      )

    it('renders root correctly', () => {
      const wrapper = wrapWithPath('/')

      expect(wrapper.find(Home)).toHaveLength(1)
      expect(wrapper.find(NotFound)).toHaveLength(0)
    })

    it('renders `/about` correctly', () => {
      const wrapper = wrapWithPath('/about')

      expect(wrapper.find(About)).toHaveLength(1)
      expect(wrapper.find(NotFound)).toHaveLength(0)
    })

    it('renders 404 for invalid path', () => {
      const wrapper = wrapWithPath('/invalid-path')

      expect(wrapper.find(Home)).toHaveLength(0)
      expect(wrapper.find(NotFound)).toHaveLength(1)
    })
  })
})
