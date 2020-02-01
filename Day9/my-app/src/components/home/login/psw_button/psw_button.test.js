import React from 'react';
import { shallow } from 'enzyme';
import Psw_button from './psw_button';

describe('<Psw_button />', () => {
  test('renders', () => {
    const wrapper = shallow(<Psw_button />);
    expect(wrapper).toMatchSnapshot();
  });
});
