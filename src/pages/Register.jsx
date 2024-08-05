import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        restaurant_name:'',
        address:'',
        
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
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img className='w-[20vw] mb-6' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722528186/uploadFolder/fq4c4flvs69f3cx8eylp.jpg" alt="" />
            <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
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
        </div>
    );
};

export default Register;
