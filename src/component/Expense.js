import React from "react"
import {Link} from "react-router-dom"
import moment from "moment"
import {useDispatch} from 'react-redux'
import { removeExpense } from "../actions/expense"
import { useNavigate } from "react-router-dom"
import db from "../database/firebase"
import {ref, remove} from "firebase/database";

const Expense = ({
    id,
    description,
    amount,
    createdAt,
    note
}) => {

    const navigate = useNavigate()
    
    const dispatch = useDispatch()

    const removingExpense = () => {
        remove(ref(db, `expenses/${id}`))
        .then(()=>{
            dispatch(removeExpense(id))})
        navigate('/');
    }

    return <div className="m-2 group w-[300px] h-[200px]  hover:bg-violet-600 rounded-xl text-white border-4 border-slate-600 hover:border-violet-600">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 h-full w-full transition-all duration-500 rounded-xl">
            <div className="absolute backface-hidden rounded-xl h-full w-full">
                <div className="text-center flex flex-col items-center justify-center h-full px-2">
                    <h2 className="uppercase">
                        {
                        moment(createdAt).format("lll")
                    }</h2>
                    <h2 className="mt-5 font-serif text-2xl text-center">
                        {description}</h2>
                    <h3 className="mt-2 text-center text-xl">
                        {
                        `$${
                            amount / 100
                        }`
                    }</h3>
                </div>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden h-full w-full rounded-xl p-3 text-center text-slate-200">
                <p className="mb-4">{
                    note ? note : "Leave a note"
                }</p>
                <div className="flex justify-center">
                    <button className="mr-2 relative text-xl py-1 rounded-md px-2 border-slate-500 bg-slate-500 hover:border-slate-800 hover:bg-slate-800">
                        <Link to={
                            `/edit/${id}`
                        }>Edit</Link>
                    </button>
                    <button 
                    onClick={removingExpense}
                    className="ml-2 relative text-xl py-1 rounded-md px-2 border-red-500 bg-red-500 hover:border-red-800 hover:bg-red-800">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Expense
