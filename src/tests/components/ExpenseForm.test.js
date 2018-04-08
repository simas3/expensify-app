import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import { wrap } from 'module'
import moment from 'moment'

test('should render Expense Form', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})


test('should render Expense Form with props', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})


test('should render Expense Form error message', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    expect(wrapper.state('errordescription').length).toBeGreaterThan(0)
    expect(wrapper.state('erroramount').length).toBeGreaterThan(0)

})


test('should set description on input change', () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('TextField').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})


test('should set note on input change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('TextField').at(2).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})


test('should set amount on valid input', () => {
    const value = (12.22).toString();
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('TextField').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
})


test('shoul not set amount on invalid input ', () => {
    const value = (12.222).toString();
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('TextField').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})


test('should call on Submit prop for valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('errordescription')).toBe('')
    expect(wrapper.state('erroramount')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    })

})


test('should set new date on DateChange', () => {
    const now = moment(0)
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('DatePicker').prop('onChange')
    expect(wrapper.state('createdAt')).toEqual(now)
})