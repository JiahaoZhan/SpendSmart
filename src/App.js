import React from "react"
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AddExpense from "./component/AddExpense";
import EditExpense from "./component/EditExpense";
import { startSetExpenses } from "./actions/expense";
import Layout from "./component/Layout";
import store from "./store/configStore"
import { Provider } from 'react-redux'


const domNode = document.getElementById('root');
const root = createRoot(domNode);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/addExpense" element={<AddExpense/>}/>
            <Route path="/edit/:id" element={<EditExpense/>}/>
        </Route>
    )
)
const jsx = (
<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

const renderApp = () => {
    if (!hasRendered) {
      root.render(jsx)
      hasRendered = true;
    }
  };  

store.dispatch(startSetExpenses()).then(() => {renderApp();})
