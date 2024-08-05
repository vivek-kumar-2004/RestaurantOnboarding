import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { setIsAuthenticated } = useContext(RestaurantContext);
  const [form, setForm] = useState({ name: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name) {
      setIsAuthenticated(true);
      navigate('/admin');
    } else {
      alert('Please enter a valid restaurant name.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Restaurant Name"
        required
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign In</button>
    </form>
  );
};

export default SignIn;
