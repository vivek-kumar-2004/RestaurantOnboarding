import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

const ManageMenu = () => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setRestaurant({ ...restaurant, menu: [...restaurant.menu, newItem] });
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    setRestaurant({ ...restaurant, menu: restaurant.menu.filter((_, i) => i !== index) });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Menu</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New Menu Item"
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 rounded mb-4">Add Item</button>
      <ul>
        {restaurant.menu.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {item}
            <button onClick={() => handleRemoveItem(index)} className="bg-red-500 text-white p-1 rounded">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMenu;
