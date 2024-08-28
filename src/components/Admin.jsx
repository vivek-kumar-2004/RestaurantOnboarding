import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

const Admin = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('/api/auth/restroDetails');
                setRestaurants(response.data);
            } catch (err) {
                console.error('Error fetching restaurant data:', err.message);
                toast.error("Failed to fetch restaurant data");
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, []);

    return (
        <div className="flex flex-col p-6 bg-gray-50 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-black">REGISTERED RESTAURANTS</h1>
                        <button
                            className="bg-red-900 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-700"
                            onClick={() => window.location.reload()}
                        >
                            Refresh Data
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead className="bg-red-900 text-white">
                                <tr>
                                    <th className="py-3 px-6 border-b text-left">Name</th>
                                    <th className="py-3 px-6 border-b text-left">Email</th>
                                    <th className="py-3 px-6 border-b text-left">Restaurant Name</th>
                                    <th className="py-3 px-6 border-b text-left">Address</th>
                                    <th className="py-3 px-6 border-b text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="py-4 px-6 text-center text-gray-600">
                                            Loading...
                                        </td>
                                    </tr>
                                ) : (
                                    restaurants.length ? (
                                        restaurants.map((restaurant) => (
                                            <tr key={restaurant._id} className="hover:bg-gray-50">
                                                <td className="py-3 px-6 border-b">{restaurant.name}</td>
                                                <td className="py-3 px-6 border-b">{restaurant.email}</td>
                                                <td className="py-3 px-6 border-b">{restaurant.restaurant_name}</td>
                                                <td className="py-3 px-6 border-b">{restaurant.address}</td>
                                                <td className="py-3 px-6 border-b">{restaurant.status}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="py-4 px-6 text-center text-gray-600">No restaurants found</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
