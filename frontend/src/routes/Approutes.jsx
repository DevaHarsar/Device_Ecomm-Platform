import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login';
import Weblayouts from '../layouts/Weblayouts';


const Approutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<Weblayouts/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Approutes