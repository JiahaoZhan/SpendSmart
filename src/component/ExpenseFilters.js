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
      if (dates) {
        const startDate = dates[0].toString()
        const endDate = dates[1].toString()
        dispatch(setStartDate(startDate))
        dispatch(setEndDate(endDate))
        setDates([startDate, endDate])
      }
      else {
        dispatch(setStartDate(null))
        dispatch(setEndDate(null))
        setDates([null, null])
      }
    }

    const onSortByChange = (e) => {
      e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByAmount())
    }

    const onSearchChange = (e) =>{
      dispatch(setTextFilter(e.target.value))
    }
    
    return (
      <div className="flex flex-wrap justify-center mb-6">
        <input className="flex-initial inline-block shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter keywords" value={filters.text} onChange={onSearchChange}></input>
        <select className="flex-initial inline-block shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={filters.sortBy} onChange={onSortByChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        className="flex-initial inline-block shadow appearance-none border rounded  py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        onChange={onDatesChange}
        value={dates} 
        openCalendarOnFocus={true}
        />
      </div>
    )
}

export default ExpenseFilters;