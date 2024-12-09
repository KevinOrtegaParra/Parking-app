import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../conponents/users/Users"
import NorFound from "../conponents/ui/NotFound";
import Navbar from "../conponents/ui/NavBar";
import Footer from "../conponents/ui/Footer";

export default function AppRouter() {
    return (
        <>
            <div className="container">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Users/>}/>
                    <Route path="*" element={<NorFound/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}
