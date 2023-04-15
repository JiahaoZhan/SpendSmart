import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import expenseReducer from "../reducers/expense";

const reducer = {
  expenses: expenseReducer
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store