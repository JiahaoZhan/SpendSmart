import db from "../database/firebase"
import { ref, push, child, get } from "firebase/database";


export const addExpense = (expense) => (
    {
        type: 'ADD_EXPENSE',
        expense
    }
)

export const removeExpense = (id) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

export const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)

export const setExpenses = (expenses) => (
    {
        type: 'SET_EXPENSE',
        expenses
    }
)


export const startSetExpenses = () => {
    const dbRef = ref(db)
    return (dispatch, getState) => {
        return get(child(dbRef, 'expenses')).then((snapshot) => {
            if (snapshot.exists()) {
                const expensesData = snapshot.val();
                const expensesArray = []
                for (let key in expensesData) {
                    expensesArray.push({
                        id: key,
                        ...expensesData[key]
                    })
                }
                dispatch(setExpenses(expensesArray))
            } else {
                console.log("No data available");
            }
          })
          .catch(()=>{

          })
    };
};    


export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        console.log(expense)
        push(ref(db, 'expenses'), expense)
        .then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}