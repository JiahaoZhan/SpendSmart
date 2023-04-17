import React from "react"
import { useSelector } from 'react-redux'
import Expense from "./Expense"
import getFilteredExpenses from "../selectors/expenses"

const ExpenseList = () => {
    const expenses = useSelector((state) => getFilteredExpenses(state.expenses, state.filters))
    return (
    <div className="flex flex-wrap justify-center flex-col md:flex-row">
        {
            expenses.map((expense)=>(
                <Expense key={expense.id} {...expense}/>
            ))
        }
    </div>
    )
}
 
export default ExpenseList