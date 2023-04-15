import React from "react"
import { useSelector } from 'react-redux'
import Expense from "./Expense"

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses)
    console.log(expenses)
    return <div>
        <h2>ExpenseList</h2>
        {
            expenses.map((expense)=>(
                <Expense key={expense.id} {...expense}/>
            ))
        }
    </div>
}
 
export default ExpenseList