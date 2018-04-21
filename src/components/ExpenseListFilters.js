import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const items = [
    <MenuItem key={1} value="date" primaryText="Date" />,
    <MenuItem key={2} value="amount" primaryText="Amount" />
];


export class ExpenseListFilers extends Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onSelectChange = (event, index, value) => {
        if (value === 'amount') {
            this.props.sortByAmount()
        } else if (value === 'date') {
            this.props.sortByDate()
        }
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    render() {
        return (
            <div>
                <TextField
                    floatingLabelText="Enter you filter text"
                    onChange={this.onTextChange}
                />
                <br />
                <SelectField
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectChange}
                    floatingLabelText="Select To Sort Buy"
                >
                    {items}
                </SelectField>
                <br />
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    startDateId="your_unique_start_date_id"
                    endDateId="your_unique_end_date_id"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}


const mapDistpatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

const mapStateToProps = (state) => ({
    filters: state.filters
})


export default connect(mapStateToProps, mapDistpatchToProps)(ExpenseListFilers)