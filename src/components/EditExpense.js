import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import RaisedButton from 'material-ui/RaisedButton';



export class EditExpense extends Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/dashboard')
    }

    onClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="container">
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <br />
                <RaisedButton
                    label="Remove"
                    primary={true}
                    onClick={this.onClick} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, props) => (
    {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
)

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);