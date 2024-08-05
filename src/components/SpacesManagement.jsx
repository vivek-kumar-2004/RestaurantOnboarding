import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const SpacesManagement = () => {
    const[space,setSpace]=useState([]);
    const getproduct= ()=>{
        axios.get("/api/restaurant/getSpace")
            .then((response)=>{
                setSpace(response.data.data);
        } )
        .catch((error)=>{
            console.log(error);
        })
}

   useEffect(()=>{
      getproduct()
   },[]) ;

    return (
        <div className='w-full h-screen bg-zinc-200'>
            <h2 className="text-3xl text-blue-950 text-center font-bold mb-6 pt-8">SPACE MANAGEMENT</h2>
            <Link to="/AddNewAmenity"><button className='py-1 px-3  bg-red-950  rounded-md text-white ml-6 mb-6' >Add New Spaces</button></Link>
            <div className='w-full flex  flex-wrap gap-5  px-[1.6vw] pt-4 pb-4 '>
                {space.map((p,index)=>(
                <Link key={index} className='w-[14.5vw] h-[34vh] mt-2 bg-white p-3 flex flex-col items-center justify-between border rounded-lg shadow-2xl  transition-transform transform hover:scale-105 ' to={`/menuItemsDetails/${p._id}`}>
                    <div className='w-full h-[70%] mb-2'>
                        <img className='w-[100%] h-full object-contain' src={`${p.imageUrl}`} alt="" />
                    </div>
                    <h1 className='font-bold tracking-tight text-blue-950 leading-5 text-xl mb-1 '>{p.spaceTitle}</h1>
                </Link>
             ))}
            </div>
        </div>
    );
};

export default SpacesManagement;
