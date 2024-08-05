import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import CreateMenuItem from './components/CreateMenuItem';
import MenuItemsDetails from './components/MenuItemsDetails';
import CreateAmenities from './components/CreateAmenities';
import CreateSpace from './components/CreateSpace';
import EditMenuItem from './components/EditMenuItem';
import MenuManagement from './components/MenuManagement';
import AmenitiesManagement from './components/AmenitiesManagement';
import SpacesManagement from './components/SpacesManagement';
import TimingsManagement from './components/TimingsManagement';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={<AdminDashboard />}>
                <Route path="Dashboard" element={<Home />} />
                <Route path="Menu" element={<MenuManagement />} />
                <Route path="Amenity" element={<AmenitiesManagement />} />
                <Route path="Space" element={<SpacesManagement />} />
                <Route path="Timings" element={<TimingsManagement />} />
                <Route path='CreateMenuItem' element={<CreateMenuItem/>} />
                <Route path='menuItemsDetails/:id' element={<MenuItemsDetails/>} />
                <Route path='editMenuItem/:id' element={<EditMenuItem/>} />
                <Route path='AddNewAmenity' element={<CreateAmenities/>} />
                <Route path='AddNewSpace' element={<CreateSpace/>} />
            </Route>
        </Routes>
    );
};

export default App;
