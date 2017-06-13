
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Link } from 'react-router-dom';
import { Button } from '../../client/components';

describe('<Button />', () => {
  it('should render it\'s children', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.contains('Button')).to.equal(true);
  });

  it('renders as `button` without props', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.is('button')).to.equal(true);
  });

  it('renders as `Link` with `to` prop', () => {
    const wrapper = shallow(<Button to="/">Button</Button>);
    expect(wrapper.is(Link)).to.equal(true);
  });

  it('renders as `button` with `onClick` prop', () => {
    const wrapper = shallow(<Button onClick={() => {}}>Button</Button>);
    expect(wrapper.is('button')).to.equal(true);
  });

  it('renders as `a` with `href` prop', () => {
    const wrapper = shallow(<Button href="/">Button</Button>);
    expect(wrapper.is('a')).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onButtonClick}>Test</Button>);

    wrapper.simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
