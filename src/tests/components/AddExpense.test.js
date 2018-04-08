import React from 'react'
import { AddExpensePage } from '../../components/AddExpense'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should render AddExpense component', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})