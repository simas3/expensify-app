import React from 'react'
import { shallow } from 'enzyme'
import { LoginComponent } from '../../components/Login'
import expenses from '../fixtures/expenses'

let startLogin, wrapper

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginComponent startLogin={startLogin} />)
})

test('should render login', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout onClick', () => {
    wrapper.find('RaisedButton').prop('onClick')()
    expect(startLogin).toHaveBeenCalled()
})