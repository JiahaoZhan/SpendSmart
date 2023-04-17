import React from "react"
import ExpenseForm from "./partials/ExpenseForm"
import { editExpense, removeExpense } from "../actions/expense"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ref, update } from "firebase/database";
import db from "../database/firebase"

const EditExpense = () => {
    let {id} = useParams();
    const navigate = useNavigate()
    const expense = useSelector((state) => state.expenses.find((expense)=> expense.id === id))
    const dispatch = useDispatch()

    const editingExpense = (expenseData = {}) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        const updates = {}
        updates[`/expenses/${id}`] = expense
        update(ref(db), updates)
        .then(()=>{
            dispatch(editExpense(id, expense))})
        navigate('/');
    }

    return (
    <div>
        <ExpenseForm expense={expense} onSubmit={editingExpense}/>
    </div>
    )
}

export default EditExpense