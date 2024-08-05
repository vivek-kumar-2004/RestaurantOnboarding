import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

const Register = () => {
  const { setRestaurant, setIsAuthenticated } = useContext(RestaurantContext);
  const [form, setForm] = useState({ name: '', address: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRestaurant(form);
    setIsAuthenticated(true);
    alert('Restaurant registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register Your Restaurant</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Restaurant Name"
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        required
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default Register;
