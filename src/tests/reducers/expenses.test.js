import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})


test('should add expense', () => {

    const expense = {
        id: '4',
        description: 'House',
        note: '',
        amount: 9999999999,
        createdAt: 1111111110
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit expense', () => {


    const updates = {
        description: 'House',
        note: '',
        amount: 9999999999,
        createdAt: 1111111110
    }


    const action = {
        type: 'EDIT_EXPENSE',
        updates,
        id: expenses[2].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], { ...expenses[2], ...updates }])
})


test('should not edit expense by od', () => {


    const updates = {
        description: 'House',
        note: '',
        amount: 9999999999,
        createdAt: 1111111110
    }


    const action = {
        type: 'EDIT_EXPENSE',
        updates,
        id: -1
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses])
})


test('should set expenses', () => {
    const setExpenses = [{
        description: 'House',
        note: '',
        amount: 9999999999,
        createdAt: 1111111110
    },
    {
        description: 'Plane',
        note: 'I bought a plane',
        amount: 9999999999,
        createdAt: 1111111110
    }]

    const action = {
        type: 'SET_EXPENSES',
        expenses: setExpenses
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(action.expenses)
})