import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import expenseReducer from "../reducers/expense";
import filterReducer from "../reducers/filter"

const reducer = {
  expenses: expenseReducer,
  filters: filterReducer
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store