import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const checkTokenExpiration = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/signin');
            } else {
                const jwt_decode = (await import('jwt-decode')).default;
                const decodedToken = jwt_decode(token);
                const currentTime = Date.now() / 1000; // current time in seconds

                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/signin');
                }
            }
        };
        checkTokenExpiration();
    }, [navigate]);

    return (
        <div className='h-screen flex'>
            <Sidebar open={open} setOpen={setOpen} />
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                <Outlet context={{ open }} />
            </div>
        </div>
    );
};

export default AdminDashboard;