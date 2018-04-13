import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, startRemoveExpense } from '../actions/expenses'
import RaisedButton from 'material-ui/RaisedButton';



export class EditExpense extends Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
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
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(startRemoveExpense(data))
    }
)

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);