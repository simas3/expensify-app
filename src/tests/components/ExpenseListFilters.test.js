import React from 'react'
import { ExpenseListFilers } from '../../components/ExpenseListFilters'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'
let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    wrapper = shallow(<ExpenseListFilers
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />
    )
})

test('should render filters component', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render filters component with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    let value = 'hahah'
    console.log(wrapper.find('TextField').at(0))
    wrapper.find('TextField').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)

})


test('should sort by date', () => {
    let value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('SelectField').prop('onChange')('event', 'index', value)
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    let value = 'amount'
    wrapper.find('SelectField').prop('onChange')('event', 'index', value)
    expect(sortByAmount).toHaveBeenCalled()
})


test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})


test('should handle focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})



