import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

const ManageSpaces = () => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);
  const [newSpace, setNewSpace] = useState('');

  const handleAddSpace = () => {
    setRestaurant({ ...restaurant, spaces: [...restaurant.spaces, newSpace] });
    setNewSpace('');
  };

  const handleRemoveSpace = (index) => {
    setRestaurant({ ...restaurant, spaces: restaurant.spaces.filter((_, i) => i !== index) });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Spaces</h2>
      <input
        type="text"
        value={newSpace}
        onChange={(e) => setNewSpace(e.target.value)}
        placeholder="New Space"
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleAddSpace} className="bg-blue-500 text-white p-2 rounded mb-4">Add Space</button>
      <ul>
        {restaurant.spaces.map((space, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {space}
            <button onClick={() => handleRemoveSpace(index)} className="bg-red-500 text-white p-1 rounded">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageSpaces;
