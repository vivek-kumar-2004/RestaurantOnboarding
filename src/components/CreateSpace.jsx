import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

function CreateSpace() {

    const [ spaces, setSpaces] = useState({
        imageUrl:'',
        spaceTitle:'',
      });
    
      const navigate=useNavigate();
      const onChange = (e) => setSpaces({ ...spaces, [e.target.name]: e.target.value });
      console.log(spaces);
      const handleSubmit= async (e) =>{
        e.preventDefault();
        navigate(-1);
    
      console.log(spaces);
      try {
            await axios.post('/api/restaurant/addSpace', spaces);
        } catch (err) {
            console.error(err);
        } 
      toast.success("Space added successfully");
     }  

  return (
    <div className='flex justify-center translate-y-[50%]'>
        <form className='w-[40vw] h-[65vh]' action="" onSubmit={handleSubmit}>
            <h1 className='font-bold text-2xl mb-5'>Add New Space</h1>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="url" placeholder='imageUrl' onChange={onChange} name="imageUrl" value={spaces.imageUrl} required/>
            <input className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3' type="text" placeholder='spaceTitle' onChange={onChange} name="spaceTitle" value={spaces.spaceTitle} required/>
            <button className='py-1 px-3  bg-red-700 shadow rounded-md text-white  mt-2 mb-6' >Add New Space</button>
        </form>
    </div>
  )
}

export default CreateSpace