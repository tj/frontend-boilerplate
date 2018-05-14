import React from 'react'
import { shallow } from 'enzyme'
import { css } from 'aphrodite'

import { Link } from 'react-router-dom'
import Button from '../'
import styles from '../style'

describe('<Button />', () => {
  it("should render it's children", () => {
    const wrapper = shallow(<Button>Button</Button>)
    expect(wrapper.contains('Button')).toEqual(true)
  })

  it('renders as `button` without props', () => {
    const wrapper = shallow(<Button>Button</Button>)
    expect(wrapper.is('button')).toEqual(true)
  })

  it('renders as `Link` with `to` prop', () => {
    const wrapper = shallow(<Button to="/">Button</Button>)
    expect(wrapper.is(Link)).toEqual(true)
  })

  it('renders as `button` with `onClick` prop', () => {
    const wrapper = shallow(<Button onClick={() => {}}>Button</Button>)
    expect(wrapper.is('button')).toEqual(true)
  })

  it('renders as `a` with `href` prop', () => {
    const wrapper = shallow(<Button href="/">Button</Button>)
    expect(wrapper.is('a')).toEqual(true)
  })

  it('has `active` class when `active` prop is set', () => {
    const wrapper = shallow(
      <Button onClick={() => {}} loading>
        Test
      </Button>
    )

    const expectedClassName = css(styles.button__spinner, styles['button__spinner--active'])
    const className = wrapper
      .find('span')
      .at(0)
      .prop('className')

    expect(className).toEqual(expectedClassName)
  })

  it('simulates click events', () => {
    const onButtonClick = jest.fn()
    const wrapper = shallow(<Button onClick={onButtonClick}>Test</Button>)

    wrapper.simulate('click')
    expect(onButtonClick).toHaveBeenCalled()
  })
})
