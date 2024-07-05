import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../container/home';
import About from '../container/about';
import HeaderLayout from '../layout/header';
import FooterLayout from '../layout/footer';

export default function PublicRoute() {
    return (
        <Router>
            <HeaderLayout />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            <FooterLayout />
        </Router>
    )
}       