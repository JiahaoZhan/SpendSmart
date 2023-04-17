import React from "react";
import { NavLink, Outlet} from "react-router-dom"

const Header = () => (
    <>
    <header>
        <nav className="flex items-center flex-wrap justify-around text-white p-6 bg-slate-800">
            <NavLink className="inline-block px-10 py-3 text-center border-violet-600 bg-violet-600 rounded-lg duration-200  hover:bg-violet-700 hover:border-blue-800"to="/">Dashboard</NavLink>
            <NavLink className="inline-block px-10 py-3 text-center border-violet-600 bg-violet-600 rounded-lg duration-200  hover:bg-violet-700 hover:border-blue-800"to="/addExpense">Add Expense</NavLink>
        </nav>
    </header>
    </>
)

export default Header 