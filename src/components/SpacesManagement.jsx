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
        <div>
            <h2 className="text-4xl text-center font-semibold mb-8 shadow-2xl  transition-transform transform font-serif mt-16"> Space Type</h2>
            <Link to="/AddNewSpace"><button className='py-1 px-3  bg-red-700 shadow rounded-md text-white ml-4 mt-2 mb-6' >Add New Space</button></Link>
            <div className='w-full h-[50vh] max-h-[50vh] bg-[#E3DDDD]  flex justify-center flex-wrap gap-12 overflow-auto pl-4 pt-4 pb-4 shadow-2xl  transition-transform transform border-2 border-transparent-400'>
                {space.map((p,index)=>(
                <Link key={index} className='w-[14.5vw] h-[34vh] mt-10 bg-white p-3 flex flex-col items-center justify-between border rounded-lg shadow-2xl  transition-transform transform hover:scale-105 ' to={`/spaceDetails/${p._id}`}>
                    <div className='w-full h-[70%] mb-2'>
                        <img className='w-[100%] h-full object-contain' src={`${p.imageUrl}`} alt="" />
                    </div>
                    <h1 className='font-bold tracking-tight leading-5 text-xl'>{p.spaceTitle}</h1>
                </Link>
             ))}
            </div>
        </div>
    );
};

export default SpacesManagement;
