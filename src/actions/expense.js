import db from "../database/firebase"
import { ref, push } from "firebase/database";

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


export const startSetExpenses = (expenses = []) => {
    return (dispatch, getState) => {
        return database.ref(`expenses`).once('value').then((snapshot) => {
          const expenses = [];
          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });
          dispatch(setExpenses(expenses));
        });
    };
};    


export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        push(ref(db, 'expenses'), expense)
        .then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}