import React, { useState } from "react";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

const ExpenseForm = ({expense, onSubmit}) => {
    const [description, setDescription] = useState(expense? expense.description : '');
    const [note, setNote] = useState(expense? expense.note : '');
    const [amount, setAmount] = useState(expense? (expense.amount / 100).toString() : '');
    const [createdAt, setCreateDate] = useState(expense? expense.createdAt: moment().format());
    const [focused, setFocused] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const onDatePickerChange = (createdDate) => {
        if (createdDate) {
            setCreateDate(createdDate.toString())
        }
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (!description || !amount) {
            setErrMsg("Please provide description or amount")
        }
        else {
            setErrMsg("")
            onSubmit({
                description,
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt,
                note
            })
        }
    }

    return (
            <form className="w-full mx-auto text-center max-w-sm bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={formHandler}>
            <h1 className="mb-4 font-serif text-xl">
            {expense && "Edit Expense"}
            {!expense && "New Expense"}
            </h1>
            {/*description*/}
            <input 
            className="block mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            name="description"
            placeholder="description"
            value={description} 
            onChange={(e)=>{
                setDescription(e.target.value)
            }}>    
            </input>

            {/*amount*/}
            <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block mb-4"
            type="text" 
            name="amount" 
            placeholder="amount"
            value={amount}
            onChange={(e)=>{
                setAmount(e.target.value)
            }}>
            </input>

            {/*createDate*/}
            <DatePicker className="block mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={onDatePickerChange} value={createdAt}/>

            {/*note*/}
            <textarea 
            className="block mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={note}
            placeholder="leave a note"
            onChange={(e)=>{
                setNote(e.target.value)
            }}
            ></textarea>
            <button className="bg-violet-600 rounded-md px-5 py-2 text-white hover:bg-violet-900 transition-all duration-500" type="submit">
                {expense && "Save"}
                {!expense && "Add"}
            </button>
        </form>
    )
}

export default ExpenseForm;