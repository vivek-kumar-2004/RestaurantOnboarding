import React, { useContext } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ManageMenu from './ManageMenu';
import ManageAmenities from './ManageAmenities';
import ManageSpaces from './ManageSpaces';
import ManageTimings from './ManageTimings';
import ManageBookings from './ManageBookings';

const AdminDashboard = () => {
  const { isAuthenticated } = useContext(RestaurantContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/signin');
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <Link to="menu" className="mr-4">Manage Menu</Link>
        <Link to="amenities" className="mr-4">Manage Amenities</Link>
        <Link to="spaces" className="mr-4">Manage Spaces</Link>
        <Link to="timings" className="mr-4">Manage Timings</Link>
        <Link to="bookings">Manage Bookings</Link>
      </div>
      <Routes>
        <Route path="menu" element={<ManageMenu />} />
        <Route path="amenities" element={<ManageAmenities />} />
        <Route path="spaces" element={<ManageSpaces />} />
        <Route path="timings" element={<ManageTimings />} />
        <Route path="bookings" element={<ManageBookings />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
