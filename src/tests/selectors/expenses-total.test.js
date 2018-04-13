import selectExpensesTotal from '../../selectors/expenses-total'

import expenses from '../fixtures/expenses'

test('should add all expenses', () => {
    let total = selectExpensesTotal(expenses)
    expect(total).toBe(113695)
})

test('should return 0 if no expense', () => {
    let total = selectExpensesTotal()
    expect(total).toBe(0)
})


test('should add one expense', () => {
    let total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(195)
})



