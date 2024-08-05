import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

const ManageTimings = () => {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);
  const [timings, setTimings] = useState(restaurant.timings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimings({ ...timings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRestaurant({ ...restaurant, timings });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Timings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="time"
          name="opening"
          value={timings.opening}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="time"
          name="closing"
          value={timings.closing}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Timings</button>
      </form>
    </div>
  );
};

export default ManageTimings;
