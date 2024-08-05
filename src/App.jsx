import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<AboutUs/>}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path='/CreateMenuItem' element={<CreateMenuItem/>} />
                    <Route path='/menuItemsDetails/:id' element={<MenuItemsDetails/>} />
                    <Route path='/editMenuItem/:id' element={<EditMenuItem/>} />
                    <Route path='/AddNewAmenity' element={<CreateAmenities/>} />
                    <Route path='/AddNewSpace' element={<CreateSpace/>} />
                </Routes>
            </Router>
        
    );
};

export default App;
