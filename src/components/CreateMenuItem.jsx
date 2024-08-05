import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../axiosConfig';

function CreateMenuItem() {
  const [ menuItems, setMenuItems ] = useState({
    imageUrl:'',
    itemTitle:'',
    price:'',
  });

  const navigate=useNavigate();
  const onChange = e => setMenuItems({ ...menuItems, [e.target.name]: e.target.value });
  const handleSubmit= async (e) =>{
    e.preventDefault();
    navigate(-1);

  try {
        await axios.post('/api/restaurant/addMenuItem', menuItems);
    } catch (err) {
        console.error(err);
    } 
  toast.success("Product added successfully");
 }  
 return (
  <div className='w-full h-screen bg-[#F9F4F3]'>
    <div className='flex justify-center translate-y-[50%] '>
        <form className='w-[40vw] h-[65vh] ' action="" onSubmit={handleSubmit}>
            <h1 className='font-bold text-3xl mb-5'>Add New Item</h1>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="file" placeholder='imageUrl' onChange={onChange} name="imageUrl" value={menuItems.imageUrl} required/>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="text" placeholder='itemTitle' onChange={onChange} name="itemTitle" value={menuItems.itemTitle} required/>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="number" placeholder='price' onChange={onChange} name="price" value={menuItems.price} required/>
            <button className='py-1 px-3  bg-red-700 shadow rounded-md text-white mt-2 mb-6' >Add New Item</button>
        </form>
    </div>
  </div>
  )
}

export default CreateMenuItem;


