import React from 'react'
import { EditExpense } from '../../components/EditExpense'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpense startRemoveExpense={startRemoveExpense} startEditExpense={startEditExpense} expense={expenses[0]} history={history} />)
})

test('should render EditExpense component', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})


test('should handle onClick', () => {
    wrapper.find('RaisedButton').prop('onClick')()
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    })
})