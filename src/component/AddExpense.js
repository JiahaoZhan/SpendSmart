import React from "react"
import ExpenseForm from "./partials/ExpenseForm"
import { startAddExpense } from "../actions/expense"
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom';

const AddExpense = ({startAddExpense}) => {
    const navigate = useNavigate();

    const addingExpense = (expense) => {
        startAddExpense(expense);
        navigate('/');
    }
    return (
        <div>
            <h2>Add Expense</h2>
            <ExpenseForm onSubmit={addingExpense}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(null, mapDispatchToProps)(AddExpense)