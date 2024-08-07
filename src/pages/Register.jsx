import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        restaurant_name: '',
        address: '',
        opening_time: '',
        closing_time: '',
        status: 'Closed'
    });

    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', formData);
            navigate('/signin');
        } catch (err) {
            console.error(err);
            alert('Registration failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md mt-4 mb-5">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder='Name'
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
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
                    <div>
                        <label htmlFor="restaurant_name" className="block text-sm font-medium text-gray-700">Restaurant Name</label>
                        <input
                            type="text"
                            placeholder='Restaurant Name'
                            name="restaurant_name"
                            value={formData.restaurant_name}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            placeholder='Address'
                            name="address"
                            value={formData.address}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="opening_time" className="block text-sm font-medium text-gray-700">Opening Time</label>
                        <input
                            type="time"
                            placeholder="Opening Time"
                            name="opening_time"
                            value={formData.opening_time}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                        />
                    </div>
                    <div>
                        <label htmlFor="closing_time" className="block text-sm font-medium text-gray-700">Closing Time</label>
                        <input
                            type="time"
                            placeholder="Closing Time"
                            name="closing_time"
                            value={formData.closing_time}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={onChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                        >
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                    <button type="submit" className='w-full bg-red-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200'>Register</button>
                </form>
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an account? <a href="/signin" className="text-red-600 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
