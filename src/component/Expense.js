import React from "react"
import { Link } from "react-router-dom"

const Expense = ({id, description, amount, createdAt}) => (
    <li>
        <p>{description}</p>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
    </li>
)

export default Expense