import React from "react";
import { NavLink, Outlet} from "react-router-dom"

const Header = () => (
    <>
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/addExpense">Add Expense</NavLink>
        </nav>
    </header>
    </>
)

export default Header 