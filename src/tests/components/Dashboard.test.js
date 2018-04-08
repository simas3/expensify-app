import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Dashboard from '../../components/Dashboard'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';

test('should render Dashboard component', () => {
    const wrapper = shallow(<Dashboard />)
    expect(toJson(wrapper)).toMatchSnapshot()
})