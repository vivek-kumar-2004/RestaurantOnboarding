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
    <div>
      <button onClick={() => navigate(-1)} className="w-[5.5vw] ml-12 mt-4 py-1 font-semibold text-white text-lg bg-red-800 rounded-lg hover:bg-red-700 transition duration-200 flex items-center justify-center gap-2">
            <FaBackward /> Back
      </button>
      <div className="flex items-center justify-center min-h-[90vh] bg-[#FFFFFF]">
        <div className="flex  rounded-lg overflow-hidden max-w-[60vw] w-full">
          <div className='w-1/2'>
            <img className='w-full h-full object-contain' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1723284124/uploadFolder/rjzuuq4rntgjc1bfgrka.jpg" alt="" />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-5 shadow-xl p-8 py-11">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Menu Item</h2>
              <div>
                <label htmlFor="file" className="block text-m font-semibold text-gray-700 mb-2">Upload Image</label>
                  <input
                    id="file_input"
                    type="file"
                    name="imageUrl"
                    onChange={onChange}
                    className="hidden "
                  />
                <label htmlFor="file_input" className="flex items-center justify-between border border-gray-300 bg-white/80 shadow-xl rounded-md p-2 cursor-pointer">
                  <span className="text-gray-600">{fileName}</span>
                  <span className="bg-gray-200 text-gray-500 px-3 py-1 rounded-md">Choose File</span>
                </label>
              </div>
              <div>
                <label htmlFor="itemTitle" className="block text-m font-semibold text-gray-700 ">Item Name</label>
                <input
                  type="text"
                  name="itemTitle"
                  value={menuItems.itemTitle}
                  onChange={onChange}
                  className="mt-1 border border-gray-300 rounded-md w-full p-3 shadow-xl focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="Enter item name"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-m font-semibold text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={menuItems.price}
                  onChange={onChange}
                  className="mt-1 border border-gray-300 rounded-md w-full p-3 shadow-xl focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="Enter price"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-red-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200">
                Add New Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMenuItem;


//https://i.pinimg.com/564x/85/d4/58/85d4581eaba089282c2a57fc413772b2.jpg


//https://i.pinimg.com/564x/fa/de/ac/fadeaceffee48fa8638d60860bcf1ae1.jpg