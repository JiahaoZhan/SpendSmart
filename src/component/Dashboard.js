import React from "react"
import ExpenseFilters from "./ExpenseFilters"
import ExpenseList from "./ExpenseList"

const Dashboard = () => {
    return (
    <div>
        <ExpenseFilters/>
        <ExpenseList/>
    </div>
)}
    

export default Dashboard