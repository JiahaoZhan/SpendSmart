import React from "react";
import { Outlet } from "react-router-dom"
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Layout = () => (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
)

export default Layout