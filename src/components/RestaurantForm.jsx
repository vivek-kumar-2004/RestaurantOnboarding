import React, { useEffect } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import axios from '../axiosConfig';

const RestaurantForm = () => {
    const { restaurant, setRestaurant } = useRestaurant({
        name: '',
        address: '',
        phone: '',
        email: '',
    });

    useEffect(() => {
        // Fetch existing restaurant data if needed
    }, []);

    const onChange = (e) => setRestaurant({ ...restaurant, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        // e.preventDefault();
        try {
            await axios.post('/api/restaurant/createRestaurant', restaurant);
            alert('Restaurant details saved successfully.');
        } catch (err) {
            console.error(err);
        }
    };

    return (
       <div className='flex justify-center mt-32'>
            <form className='w-[40vw] h-[65vh]' onSubmit={onSubmit}>
                <h2 className='font-semibold text-3xl mb-5 text-blue-900'>Restaurant Information</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder='Restaurant Name'
                        name="name"
                        value={restaurant.name}
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
                        value={restaurant.address}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder='Phone'
                        name="phone"
                        value={restaurant.phone}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={restaurant.email}
                        onChange={onChange}
                        className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                        required
                    />
                </div>
                <button type="submit" className='py-1 px-4 bg-red-700 shadow rounded-md text-white font-semibold text-lg ml-1 mt-2' >Save</button>
            </form>
        </div>
    );
};

export default RestaurantForm;
