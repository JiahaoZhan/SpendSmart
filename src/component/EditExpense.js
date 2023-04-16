import React from "react"
import ExpenseForm from "./partials/ExpenseForm"
import { editExpense, removeExpense } from "../actions/expense"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const EditExpense = () => {
    let {id} = useParams();
    const navigate = useNavigate()
    const expense = useSelector((state) => state.expenses.find((expense)=> expense.id === id))
    const dispatch = useDispatch()

    const editingExpense = (expense) => {
        dispatch(editExpense(id, expense))
        navigate('/')
    }

    const removingExpense = () => {
        dispatch(removeExpense(expense.id))
        navigate('/')
    }

    return (
    <div>
        <ExpenseForm expense={expense} onSubmit={editingExpense}/>
        <button onClick={removingExpense}>Remove</button>
    </div>
    )
}

export default EditExpense