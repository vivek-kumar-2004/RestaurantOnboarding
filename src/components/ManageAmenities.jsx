import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

const ManageAmenities = () => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);
  const [newAmenity, setNewAmenity] = useState('');

  const handleAddAmenity = () => {
    setRestaurant({ ...restaurant, amenities: [...restaurant.amenities, newAmenity] });
    setNewAmenity('');
  };

  const handleRemoveAmenity = (index) => {
    setRestaurant({ ...restaurant, amenities: restaurant.amenities.filter((_, i) => i !== index) });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Amenities</h2>
      <input
        type="text"
        value={newAmenity}
        onChange={(e) => setNewAmenity(e.target.value)}
        placeholder="New Amenity"
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleAddAmenity} className="bg-blue-500 text-white p-2 rounded mb-4">Add Amenity</button>
      <ul>
        {restaurant.amenities.map((amenity, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {amenity}
            <button onClick={() => handleRemoveAmenity(index)} className="bg-red-500 text-white p-1 rounded">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAmenities;
