import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../axiosConfig';
import { FaBackward } from "react-icons/fa";

function CreateMenuItem() {
  const [menuItems, setMenuItems] = useState({
    itemTitle: '',
    price: '',
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('Upload Image...');

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === 'imageUrl') {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    } else {
      setMenuItems({ ...menuItems, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('itemTitle', menuItems.itemTitle);
    formData.append('price', menuItems.price);

    try {
      await axios.post('/api/restaurant/addMenuItem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success("Product added successfully");
      navigate(-1);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">ADD NEW MENU ITEM</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              id="file_input"
              type="file"
              name="imageUrl"
              onChange={onChange}
              className="hidden"
            />
            <label htmlFor="file_input" className="flex items-center justify-between border border-gray-300 bg-white shadow rounded-md p-2 cursor-pointer">
              <span className="text-gray-600">{fileName}</span>
              <span className="bg-gray-200 text-gray-500 px-3 py-1">Choose File</span>
            </label>
          </div>
          <div>
            <label htmlFor="itemTitle" className="block text-sm font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              name="itemTitle"
              value={menuItems.itemTitle}
              onChange={onChange}
              className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent'
              placeholder="Enter item name"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={menuItems.price}
              onChange={onChange}
              className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent'
              placeholder="Enter price"
              required
            />
          </div>
          <button type="submit" className='w-full bg-red-900 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200'>Add New Item</button>
        </form>
        <button onClick={() => navigate(-1)} className='w-full mt-4 py-2 font-semibold text-white text-lg bg-blue-900 rounded-lg  hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2'>
          <FaBackward /> Back
        </button>
      </div>
    </div>
  );
}

export default CreateMenuItem;
