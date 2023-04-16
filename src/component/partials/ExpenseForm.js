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
        <form onSubmit={formHandler}>
            {/*description*/}
            <input 
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
            type="text" 
            name="amount" 
            placeholder="amount"
            value={amount}
            onChange={(e)=>{
                setAmount(e.target.value)
            }}>
            </input>

            {/*createDate*/}
            <DatePicker onChange={onDatePickerChange} value={createdAt}/>

            {/*note*/}
            <textarea 
            value={note}
            placeholder="leave a note"
            onChange={(e)=>{
                setNote(e.target.value)
            }}
            ></textarea>
            <button type="submit">
                {expense && "Edit Expense"}
                {!expense && "Add Expense"}
            </button>
        </form>
    )
}

export default ExpenseForm;