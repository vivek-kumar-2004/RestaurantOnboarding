import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='h-screen flex'>
            <Sidebar/>
            <div className="flex-1 overflow-x-hidden overflow-y-auto ">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
