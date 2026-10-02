import React from "react";

import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function Layout() {
    return(
        <>
        <Header />    
        <Outlet/>  {/* by this hum isme nesting karsakte hai react-router-dom ki help se , & nesting ke top me layout call karenge */ }
        <Footer /> 
        </>
    )
}

export default Layout