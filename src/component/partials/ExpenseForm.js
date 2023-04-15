import React from "react";
import { useState } from "react";


const ExpenseForm = ({expense, addingExpense}) => {
    const [description, setDescription] = useState(expense? expense.description : '');
    const [note, setNote] = useState(expense? expense.note : '');
    const [amount, setAmount] = useState(expense? (expense.amount / 100).toString() : '');
    const [createDate, setCreateDate] = useState(expense? expense.createDate: 0);
    const [focused, setFocused] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) {
            setErrMsg("Please provide description or amount")
        }
        else {
            setErrMsg("")
            addingExpense({
                description,
                amount: parseFloat(amount, 10) * 100,
                createDate,
                note
            })
        }
    }

    return (
        <form onSubmit={onSubmit}>
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
            <input 
            type="number" 
            name="createDate" 
            value={createDate}
            onChange={(e)=>[
                setCreateDate(e.target.value)
            ]}>
            </input>

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