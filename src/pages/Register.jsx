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
        <div className="relative flex items-center pl-32 min-h-screen">
            {/* Blurred Background Image */}
            <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: "url('https://images.creativemarket.com/0.1.0/ps/2815532/5184/3456/m1/fpnw/wm0/1-6031-.jpg?1496845260&s=2bde8914a73645125dbdda6044ccd2c9')" }}></div>

            {/* Form Container */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md p-10 py-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-4">Create an Account</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-m font-bold">Name</label>
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
                        <label htmlFor="email" className="block text-m font-bold">Email</label>
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
                        <label htmlFor="password" className="block text-m font-bold">Password</label>
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
                        <label htmlFor="restaurant_name" className="block text-m font-bold">Restaurant Name</label>
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
                        <label htmlFor="address" className="block text-m font-bold">Address</label>
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
                    <button type="submit" className='w-full bg-red-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200'>Register</button>
                </form>
                <p className="mt-6 text-center text-m font-semibold">
                    Already have an account? <a href="/signin" className="text-red-800 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
