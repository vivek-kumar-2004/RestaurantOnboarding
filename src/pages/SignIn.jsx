import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', formData);
            console.log("Login response:", response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/admin');
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder='Email'
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder='Password'
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
                    <button type="submit" className='w-full bg-red-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200'>Sign In</button>
                </form>
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Don't have an account? <a href="/register" className="text-red-600 hover:underline">Sign Up</a>
                </p>
            </div>
=======
        <>
        <button onClick={()=>navigate(-1)} className='py-2 px-5 font-bold text-white bg-blue-900 rounded-l-full m-5 flex items-center gap-2'><span><FaBackward /></span>Back</button>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img className='w-[20vw] mb-6' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722526434/uploadFolder/lfoxgitnheoqp0vahiib.jpg" alt="" />
            <form onSubmit={onSubmit} className="w-full max-w-sm max-h-sm m-0">
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md bg-zinc-200 w-full h-10 p-3 mb-3'
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md bg-zinc-200 w-full h-10 p-3 mb-3'
                        required
                    />
                </div>
                <button type="submit" className='py-1 w-full bg-red-700 shadow rounded-lg text-white font-semibold text-lg mt-2'>Sign In</button>
            </form>
>>>>>>> 3ec2a5f12de84b0fedf21e01189c602f744ba721
        </div>
        </>
    );
};

export default SignIn;
