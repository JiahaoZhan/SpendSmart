import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "./partials/ExpenseForm"
import { editExpense, removeExpense } from "../actions/expense"
import { useNavigate } from 'react-router-dom';

const EditExpense = ({expense, dispatch}) => {
    const navigate = useNavigate()

    const editingExpense = (expense) => {
        dispatch(editExpense(expense.id, expense))
        navigate('/')
    }

    const removingExpense = () => {
        dispatch(removeExpense(expense.id))
        navigate('/')
    }

    return (
    <div>
        <ExpenseForm expense onSubmit={editingExpense}/>
        <button onClick={removingExpense}>Remove</button>
    </div>
    )
}

const mapStateToProps = (state, props) => (
    {expense: state.expenses.find((expense)=>expense.id === props.match.params.id)}
)

export default connect(mapStateToProps)(EditExpense);