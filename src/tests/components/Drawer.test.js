import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Drawer from '../../components/Drawer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

test('should render Drawer component', () => {
    const wrapper = shallow(<Drawer />)
    expect(toJson(wrapper)).toMatchSnapshot()
})