import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

function CreateAmenities() {
    const [ amenities, setAmenities ] = useState({
        imageUrl:'',
        amenityTitle:'',
      });
    
      const navigate=useNavigate();
      const onChange = (e) => setAmenities({ ...amenities, [e.target.name]: e.target.value });
      console.log(amenities);
      const handleSubmit= async (e) =>{
        e.preventDefault();
        navigate(-1);
    
      console.log(amenities);
      try {
            await axios.post('/api/restaurant/addAmenity', amenities);
        } catch (err) {
            console.error(err);
        } 
      toast.success("Amenity added successfully");
     }  

  return (
    <div className='flex justify-center translate-y-[50%] '>
        <form className='w-[40vw] h-[65vh]' action="" onSubmit={handleSubmit}>
            <h1 className='font-bold text-2xl mb-5'>Add New Amenity</h1>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="url" placeholder='imageUrl' onChange={onChange} name="imageUrl" value={amenities.imageUrl} required/>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="text" placeholder='amenityTitle' onChange={onChange} name="amenityTitle" value={amenities.amenityTitle} required/>
            <button className='py-1 px-3  bg-red-700 shadow rounded-md text-white  mt-2 mb-6' >Add New Amenity</button>
        </form>
    </div>
  )
}

export default CreateAmenities