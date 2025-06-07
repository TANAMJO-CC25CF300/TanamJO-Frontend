import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import Dashboard from '../Dashboard';

function MasterUsers() {
    return (
        <>
            <Helmet>
                {/* Tempatkan link/script tambahan di sini jika perlu */}
            </Helmet>

            <Header />
            
            <div style={{ display: 'flex' }}>
                <LeftSidebar />
                <Dashboard />
            </div>
        </>
    )
}

export default MasterUsers; 