import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import NotFound from '../../components/NotFound'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

test('should render Drawer component', () => {
    const wrapper = shallow(<NotFound />)
    expect(toJson(wrapper)).toMatchSnapshot()
})