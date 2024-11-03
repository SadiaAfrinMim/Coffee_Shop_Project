import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
                <Toaster />
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] py-12"
            >
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;