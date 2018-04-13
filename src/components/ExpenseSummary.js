import React, { Component } from 'react'
import { connect } from 'react-redux'
import expensesTotalAmount from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'


export class ExpenseSummary extends Component {
    render() {
        return (
            <div>
                {
                    this.props.expensesCount === 1 ?
                        (<p>Viewing 1 expense totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}</p>)
                        : this.props.expensesCount > 1 ?
                            (<p>Viewing {this.props.expensesCount} expenses totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}</p>)
                            : (<p></p>)
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    expensesCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: expensesTotalAmount(selectExpenses(state.expenses, state.filters))
})


export default connect(mapStateToProps)(ExpenseSummary)