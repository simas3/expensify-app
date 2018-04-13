import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'
import expensesTotalAmount from '../../selectors/expenses-total'

test('render expenses summary', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={expenses.length} expensesTotal={expensesTotalAmount(expenses)} />)
    expect(wrapper).toMatchSnapshot()
})

