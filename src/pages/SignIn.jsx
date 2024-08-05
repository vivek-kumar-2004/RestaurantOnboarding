import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

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
            await axios.post('/api/auth/login', formData);
            navigate('/admin');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img className='w-[20vw] mb-6' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722526434/uploadFolder/lfoxgitnheoqp0vahiib.jpg" alt="" />
            <form onSubmit={onSubmit} className="w-full max-w-sm">
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
                <button type="submit" className='py-1 w-full bg-red-700 shadow rounded-lg text-white font-semibold text-lg  mt-2' >Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
