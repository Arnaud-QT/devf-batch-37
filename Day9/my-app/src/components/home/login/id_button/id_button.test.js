import React from 'react';
import { shallow } from 'enzyme';
import Id_button from './id_button';

describe('<Id_button />', () => {
  test('renders', () => {
    const wrapper = shallow(<Id_button />);
    expect(wrapper).toMatchSnapshot();
  });
});
