import React, { useState } from "react"
import { sortByAmount, setEndDate, setStartDate, setTextFilter, sortByDate } from "../actions/filter";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment"
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

const ExpenseFilters = () => {
    const [dates, setDates] = useState([moment().startOf('month').format('lll'), moment().endOf('month').format('lll')]);
    const dispatch = useDispatch()
    const filters = useSelector((state) => (state.filters))

    const onDatesChange = (dates) => {
      const startDate = dates[0].toString()
      const endDate = dates[1].toString()
      dispatch(setStartDate(startDate))
      dispatch(setEndDate(endDate))
      setDates([startDate, endDate])
    }

    const onSortByChange = (e) => {
      e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByAmount())
    }

    const onSearchChange = (e) =>{
      dispatch(setTextFilter(e.target.value))
    }
    
    return (
      <div>
        <div>
          <input type="text" placeholder="Search" value={filters.text} onChange={onSearchChange}></input>
          <select value={filters.sortBy} onChange={onSortByChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <DateRangePicker 
        onChange={onDatesChange}
        value={dates} 
        openCalendarOnFocus={true}
        />
      </div>
    )
}

export default ExpenseFilters;