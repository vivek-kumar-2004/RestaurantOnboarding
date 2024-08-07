import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";


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
<<<<<<< HEAD
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
=======
        <>
        <button onClick={()=>navigate(-1)} className='py-2 px-5 font-bold text-white bg-blue-900 rounded-l-full mt-5 mb-0 ml-5 flex items-center gap-2'><span><FaBackward /></span>Back</button>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img className='w-[20vw] mb-0 mt-0' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722528186/uploadFolder/fq4c4flvs69f3cx8eylp.jpg" alt="" />
            <form onSubmit={onSubmit} className="max-h-md w-full max-w-sm">
            <div className="mb-2">
                    <input
                        type="text"
                        placeholder='Name'
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3 '
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3 '
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3 '
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder='Role'
                        name="role"
                        value={formData.role}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3 '
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder='Restaurant Name'
                        name="restaurant_name"
                        value={formData.restaurant_name}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3 '
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder='Address'
                        name="address"
                        value={formData.address}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                        required
                    />
                </div>
                <button type="submit" className='py-1 w-full bg-red-700 shadow rounded-lg text-white font-semibold text-lg  mt-2 ' >Register</button>
            </form>
>>>>>>> 3ec2a5f12de84b0fedf21e01189c602f744ba721
        </div>
        </>
    );
};
export default Register;