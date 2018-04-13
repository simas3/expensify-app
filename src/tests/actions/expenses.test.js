import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import { database } from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('should setup edit expense action object', () => {
    const id = '123'
    const action = editExpense(id, { note: 'Note Test' })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: 'Note Test' }
    })
})

test('should set up add expense action object with provided values', () => {

    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})

    const expenseData = {
        description: 'mouse',
        amount: 30000,
        note: 'This one is better',
        createdAt: 9000000000000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})

    const expenseDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault)
        done()
    })
})

// test('should set up add expense action object with default values', () => {
//     const expenseDefaultData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }

//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseDefaultData,
//             id: expect.any(String)
//         }
//     })
// })