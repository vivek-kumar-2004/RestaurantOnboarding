import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../axiosConfig';

function CreateMenuItem() {
  const [menuItems, setMenuItems] = useState({
    imageUrl: '',
    itemTitle: '',
    price: '',
  });

  const navigate = useNavigate();

  const onChange = e => {
    if (e.target.name === 'imageUrl') {
      setMenuItems({ ...menuItems, imageUrl: e.target.files[0] });
    } else {
      setMenuItems({ ...menuItems, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(-1);

    try {
      // FormData is needed to handle file uploads
      const formData = new FormData();
      formData.append('imageUrl', menuItems.imageUrl);
      formData.append('itemTitle', menuItems.itemTitle);
      formData.append('price', menuItems.price);

      await axios.post('/api/restaurant/addMenuItem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      console.error(err);
    }
    toast.success("Product added successfully");
  };

  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className='flex justify-center translate-y-[50%]'>
        <form className='w-[40vw] h-[65vh]' onSubmit={handleSubmit}>
          <h1 className='font-bold text-blue-950 text-3xl mb-5'>Add New Item</h1>

          {/* Hidden File Input */}
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={onChange}
            name="imageUrl"
          />
          
          {/* Custom File Input Button */}
          <label
            htmlFor="file-input"
            className="flex items-center cursor-pointer border-2 border-sky-600 rounded-md bg-white shadow-md w-full h-10 p-3 mb-3 "
          >
            <span className="px-1 border-[1px] border-black rounded-md text-black">Choose File</span>
          </label>

          <input
            className='outline-sky-600 border-2 border-sky-600 shadow rounded-md bg-white w-full h-10 p-3 mb-3'
            type="text"
            placeholder='itemTitle'
            onChange={onChange}
            name="itemTitle"
            value={menuItems.itemTitle}
            required
          />
          <input
            className='outline-sky-600 border-2 border-sky-600 shadow rounded-md bg-white w-full h-10 p-3 mb-3'
            type="number"
            placeholder='price'
            onChange={onChange}
            name="price"
            value={menuItems.price}
            required
          />
          <button
            className='py-1 px-3 bg-red-900 shadow rounded-md text-white mt-2 mb-6'
          >
            Add New Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMenuItem;
