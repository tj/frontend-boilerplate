
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Header } from '../../client/components';

describe('<Header />', () => {
  it('should have an logo in a `div`', () => {
    const wrapper = shallow(
      <Header />,
    );
    expect(wrapper.find('div')).to.have.length(1);
  });
});
