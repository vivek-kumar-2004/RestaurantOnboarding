import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

function RestaurantTimings() {
    const [restaurantData, setRestaurantData] = useState({
        opening_time: '',
        closing_time: '',
        status: 'Closed'
    });

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axios.get('/api/auth/user');
                console.log(response.data);
                setRestaurantData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchRestaurantData();
    }, []);

    const handleUpdate = async () => {
        try {
            const response = await axios.put('/api/restaurant/update-timing', {
                id: restaurantData._id,
                opening_time: restaurantData.opening_time,
                closing_time: restaurantData.closing_time,
                status: restaurantData.status
            });
            toast.success("Timings Updated successfully");
            setRestaurantData(response.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='mb-14'>
            <div className="space-y-4">
                <h2 className="text-3xl text-center font-bold">Restaurant Status</h2>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    name="status"
                    value={restaurantData.status}
                    onChange={(e) => setRestaurantData({ ...restaurantData, status: e.target.value })}
                    className="mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>

                {restaurantData.status === 'Open' && (
                    <>
                        <label htmlFor="opening_time" className="block text-sm font-medium text-gray-700">Opening Time</label>
                        <input
                            type="time"
                            placeholder="Opening Time"
                            name="opening_time"
                            value={restaurantData.opening_time}
                            onChange={(e) => setRestaurantData({ ...restaurantData, opening_time: e.target.value })}
                            className="w-full mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                        <label htmlFor="closing_time" className="block text-sm font-medium text-gray-700">Closing Time</label>
                        <input
                            type="time"
                            placeholder="Closing Time"
                            name="closing_time"
                            value={restaurantData.closing_time}
                            onChange={(e) => setRestaurantData({ ...restaurantData, closing_time: e.target.value })}
                            className="w-full mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                    </>
                )}

                <button onClick={handleUpdate} className="bg-red-900 text-white py-2 px-2 rounded-lg text-m font-semibold hover:bg-red-700 transition duration-200">
                    Update Timings
                </button>
            </div>
        </div>
    );
}

export default RestaurantTimings;
