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
    <div className='w-full h-screen bg-[#F9F4F3]'>
      <div className='flex justify-center translate-y-[50%]'>
        <form className='w-[40vw] h-[65vh]' onSubmit={handleSubmit}>
          <h1 className='font-bold text-3xl mb-5'>Add New Item</h1>
          <div className="mb-3">
            <input
              id="file_input"
              type="file"
              name="imageUrl"
              onChange={onChange}
              className="hidden"
            />
            <label htmlFor="file_input" className="outline-sky-600 border-2 border-red-950 bg-white shadow rounded-md w-full h-10 flex items-center justify-between pl-3 cursor-pointer overflow-hidden">
              <span className='text-zinc-400'>{fileName}</span>
              <span className="bg-zinc-200 text-zinc-500 px-3 py-[6px]">Choose File</span>
            </label>
          </div>
          <input
            className='outline-sky-600 border-2 border-red-950 shadow rounded-md w-full h-10 p-3 mb-3'
            type='text'
            placeholder='Item Title'
            onChange={onChange}
            name='itemTitle'
            value={menuItems.itemTitle}
            required
          />
          <input
            className='outline-sky-600 border-2 border-red-950 shadow rounded-md  w-full h-10 p-3 mb-3'
            type='number'
            placeholder='Price'
            onChange={onChange}
            name='price'
            value={menuItems.price}
            required
          />
          <button className='py-1 px-3 bg-red-900 shadow rounded-md text-white mt-2 mb-6' type='submit'>
            Add New Item
          </button>
          <button onClick={()=>navigate(-1)} className='py-1 px-3 font-bold text-white bg-blue-700 rounded-md shadow-2xl  hover:scale-105 flex items-center gap-2'><span><FaBackward /></span>Back</button>
        </form>
      </div>
    </div>
  );
}

export default CreateMenuItem;
