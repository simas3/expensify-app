import React from 'react'
import { EditExpense } from '../../components/EditExpense'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpense removeExpense={removeExpense} editExpense={editExpense} expense={expenses[0]} history={history} />)
})

test('should render EditExpense component', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})


test('should handle onClick', () => {
    wrapper.find('RaisedButton').prop('onClick')()
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    })
})