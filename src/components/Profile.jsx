import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

const Profile = () => {
    const [restaurantData, setRestaurantData] = useState({
        name: '',
        email: '',
        password: '',
        restaurant_name: '',
        address: '',
        opening_time: '',
        closing_time: '',
        status: 'Closed',
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axios.get('/api/auth/user');
                setRestaurantData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchRestaurantData();
    }, []);

    const handleInputChange = (e) => {
        setRestaurantData({
            ...restaurantData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveChanges = async () => {
        try {
            await axios.put('/api/auth/user', restaurantData);
            setIsEditing(false);
            toast.success("Profile Updated successfully");
        } catch (err) {
            console.error('Failed to save changes:', err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-[100vh]  transform transition-transform duration-300">
                <div className="p-8 ">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-4xl font-extrabold text-gray-800 mx-auto">Your Profile</h2>
                    </div>

                    {/* Profile Image Section */}
                    <div className="flex justify-center mb-8">
                        <img 
                            src="https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
                            alt="User Profile"
                            className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white transform transition-transform hover:scale-110 duration-300"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-5">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={restaurantData.name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`mt-1 block w-full p-3 border ${
                                        isEditing ? 'border-gray-300' : 'border-transparent'
                                    } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                        isEditing ? 'hover:shadow-lg' : ''
                                    }`}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={restaurantData.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`mt-1 block w-full p-3 border ${
                                        isEditing ? 'border-gray-300' : 'border-transparent'
                                    } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                        isEditing ? 'hover:shadow-lg' : ''
                                    }`}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Restaurant Name</label>
                                <input
                                    type="text"
                                    name="restaurant_name"
                                    value={restaurantData.restaurant_name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`mt-1 block w-full p-3 border ${
                                        isEditing ? 'border-gray-300' : 'border-transparent'
                                    } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                        isEditing ? 'hover:shadow-lg' : ''
                                    }`}
                                />
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label className="text-sm font-medium text-gray-600">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={restaurantData.address}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`mt-1 block w-full p-3 border ${
                                        isEditing ? 'border-gray-300' : 'border-transparent'
                                    } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                        isEditing ? 'hover:shadow-lg' : ''
                                    }`}
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Opening Time</label>
                                    <input
                                        type="time"
                                        name="opening_time"
                                        value={restaurantData.opening_time}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                        className={`mt-1 block w-full p-3 border ${
                                            isEditing ? 'border-gray-300' : 'border-transparent'
                                        } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                            isEditing ? 'hover:shadow-lg' : ''
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600">Closing Time</label>
                                    <input
                                        type="time"
                                        name="closing_time"
                                        value={restaurantData.closing_time}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                        className={`mt-1 block w-full p-3 border ${
                                            isEditing ? 'border-gray-300' : 'border-transparent'
                                        } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                            isEditing ? 'hover:shadow-lg' : ''
                                        }`}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-600">Status</label>
                                <select
                                    name="status"
                                    value={restaurantData.status}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`mt-1 block w-full p-3 border ${
                                        isEditing ? 'border-gray-300' : 'border-transparent'
                                    } rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform ${
                                        isEditing ? 'hover:shadow-lg' : ''
                                    }`}
                                >
                                    <option value="Open">Open</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        {isEditing ? (
                            <button
                                className="bg-green-600 text-white text-lg font-semibold px-3 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform "
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </button>
                        ) : (
                            <button
                                className="bg-red-800 text-white text-lg font-semibold px-3 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 transform "
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
