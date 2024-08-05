import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

const MenuManagement = () => {
    const[items,setitems]=useState([]);
    const getitems= ()=>{
        axios.get("/api/restaurant/getMenuItem")
            .then((response)=>{
                setitems(response.data.data);
        } )
        .catch((error)=>{
            console.log(error);
        })
}

   useEffect(()=>{
      getitems()
   },[]) ;

    return (
        <div className='bg-zinc-200'>
            <h2 className="text-3xl text-blue-950 text-center font-bold mb-6 pt-8">MENU MANAGEMENT</h2>
            <Link to="/admin/CreateMenuItem"><button className='py-1 px-3  bg-red-950  rounded-md text-white ml-6 mb-6' >Add New Items</button></Link>
            <div className='w-full flex  flex-wrap gap-5  px-[1.6vw] pt-4 pb-4 '>
                {items.map((p,index)=>(
                <div key={index} className='w-[14.5vw] h-[42vh] mt-2 bg-white p-3 flex flex-col items-center justify-between border rounded-lg shadow-2xl  transition-transform transform hover:scale-105 ' >
                    <div className='w-full h-[70%] mb-2'>
                        <img className='w-[100%] h-full object-contain' src={`${p.imageUrl}`} alt="" />
                    </div>
                    <h1 className='font-bold tracking-tight text-blue-950 leading-5 text-xl mb-1 '>{p.itemTitle}</h1>
                    <h1 className=' tracking-tight leading-5 text-blue-950 mb-2 '><span className='font-bold text-m mr-1'>Price:</span>${p.price}</h1>
                    <Link className='py-1 px-3  bg-red-950  rounded-md text-white' to={`/admin/menuItemsDetails/${p._id}`}>View Item</Link>
                </div>
          ))}
            </div>
        </div>
    );
};

export default MenuManagement;
