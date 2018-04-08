import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment'



export default class ExpenseForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            erroramount: '',
            errordescription: ''
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description, errordescription: '' }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount, erroramount: '' }))
        }

    }

    onDateChange = (event, date) => {
        this.setState(() => ({ createdAt: date }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            if (!this.state.description) {
                this.setState(() => ({ errordescription: 'Please Enter Description' }))
            }
            if (!this.state.amount) {
                this.setState(() => ({ erroramount: 'Please Enter Amount' }))

            }
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: +this.state.createdAt,
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                Expense Form
                <form onSubmit={this.onSubmit}>
                    <TextField
                        autoFocus
                        errorText={this.state.errordescription}
                        floatingLabelText="Description"
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    />
                    <br />
                    <TextField
                        errorText={this.state.erroramount}
                        value={this.state.amount}
                        floatingLabelText="Amount"
                        onChange={this.onAmountChange}
                    />
                    <br />
                    <br />
                    <DatePicker
                        value={this.state.createdAt}
                        autoOk={true}
                        floatingLabelText="Choose date"
                        mode="landscape"
                        onChange={this.onDateChange}
                    />
                    <TextField
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        floatingLabelText="Add a note for your expense"
                        multiLine={true}
                        rows={3}
                    />
                    <br />
                    <br />
                    <RaisedButton
                        type="submit"
                        label="Add Expense"
                        primary={true}
                        onClick={() => {
                        }
                        } />
                </form>
            </div>
        )
    }
}
