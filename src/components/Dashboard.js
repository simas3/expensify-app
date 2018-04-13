import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'

const Dashboard = () => (
  <div className="container">
    <ExpenseListFilters />
    <ExpenseSummary />
    <ExpenseList />
  </div>
)


export default Dashboard;