import React from "react";
import { NavLink } from "react-router-dom"
import Logo from "../../tailwind/logo.svg"

const Header = () => (
    <>
    <header>
        <nav className="grid md:grid-cols-3 grid-cols-1 items-center text-white p-6 bg-slate-800">
            <NavLink className="inline-block px-10 py-3 text-center border-violet-600 bg-violet-600 rounded-lg duration-200  hover:bg-violet-700 hover:border-violet-800"to="/">Dashboard</NavLink>
            <img  src={Logo} alt="Logo"></img>
            <NavLink className="inline-block px-10 py-3 text-center border-violet-600 bg-violet-600 rounded-lg duration-200  hover:bg-violet-700 hover:border-violet-800"to="/addExpense">Add Expense</NavLink>
        </nav>
    </header>
    </>
)

export default Header 