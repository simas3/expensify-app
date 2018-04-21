import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import { AppBarDrawer } from '../../components/Drawer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';


let startLogout, wrapper

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<AppBarDrawer startLogout={startLogout} />)
})

test('should render AppBarDrawer component', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should call startLogout onClick', () => {
    wrapper.find('Logout').prop('onClick')()
    expect(startLogout).toHaveBeenCalled()
})