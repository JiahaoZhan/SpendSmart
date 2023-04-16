import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

const Expense = ({id, description, amount, createdAt}) => (
    <li>
        <p>{description}</p>
        <p>{`$${amount/100}`}</p>
        <p>{moment(createdAt).format("lll")}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
    </li>
)

export default Expense