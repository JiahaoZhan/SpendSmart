import db from "../database/firebase";
import {ref, onValue} from "firebase/database";

const expensesRef = ref(db, 'expenses');
onValue(expensesRef, (snapshot) => {
    const data = Object.entries(snapshot.val());
    
});

const expenseReducer = (state=expenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense
                }
            })
        default: 
            return state;
    }
}

export default expenseReducer;