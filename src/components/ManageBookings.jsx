import React, { useContext } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

const ManageBookings = () => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);

  const handleRemoveBooking = (index) => {
    setRestaurant({ ...restaurant, bookings: restaurant.bookings.filter((_, i) => i !== index) });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Bookings</h2>
      <ul>
        {restaurant.bookings.length === 0 && <p>No bookings available.</p>}
        {restaurant.bookings.map((booking, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {booking}
            <button onClick={() => handleRemoveBooking(index)} className="bg-red-500 text-white p-1 rounded">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBookings;
