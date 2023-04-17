import React from "react"
import ExpenseForm from "./partials/ExpenseForm"
import { addExpense } from "../actions/expense"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ref, push } from "firebase/database";
import db from "../database/firebase"

const AddExpense = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addingExpense = (expenseData = {}) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        push(ref(db, 'expenses'), expense)
        .then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))})
        navigate('/');
    }

    return (
        <div>
            <ExpenseForm onSubmit={addingExpense}/>
        </div>
    )
}

export default AddExpense