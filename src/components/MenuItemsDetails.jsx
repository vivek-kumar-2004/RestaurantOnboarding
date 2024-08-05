import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../axiosConfig';
import { toast } from 'react-toastify';
import { FaBackward } from "react-icons/fa";


function MenuItemsDetails() {
    const navigate =useNavigate(); 
    const[product,setProduct]=useState([]);
    const {id} =useParams();
    
    const getSingleProduct = async () => {
        const response = await axios.get(`/api/restaurant/getmenuItemById/${id}`);
        setProduct(response.data.data);
    }
    useEffect(()=> 
        {         
          getSingleProduct();
        }, []);

    const handleProductDelete=async(ide)=>{
      alert("are you sure to delete this product?");
      try {
        await axios.delete(`/api/restaurant/deleteMenuItem/${ide}`);
    } catch (err) {
        console.error(err);
    } 
    toast.success("Product deleted successfully");
      navigate(-1);
    }
    
  return (
     <div className='w-full h-screen bg-[#F9F4F3]'>
         <div className='w-4/5 h-Screen p-10 flex  justify-center  gap-10 translate-x-[23%] translate-y-[70%] '>
          <div className='w-72 '>
              <img className='w-full h-full object-cover rounded-xl ' src={product.imageUrl} alt="" />
          </div>
          <div className='content w-[30vw] flex flex-col pt-10'>
              <h1 className='font-bold text-3xl mb-2'>{product.itemTitle}</h1>
              <h3 className='text-red-700 font-semibold text-xl mb-6'>$ {product.price}</h3>
              <div className='flex gap-3'>
                <button onClick={()=>navigate(-1)} className='py-1 px-3 font-bold text-white bg-blue-700 rounded-md shadow-2xl  hover:scale-105 flex items-center gap-2'><span><FaBackward /></span>Back</button>
                <Link to={`/admin/editMenuItem/${product._id}`} className='py-1 px-3 font-bold text-white bg-blue-950 rounded-md shadow-2xl  hover:scale-105'>Edit</Link>
                <button onClick={()=>handleProductDelete(product._id)} className='py-1 px-3 font-bold text-white bg-red-900 rounded-md shadow-2xl  hover:scale-105' >Delete</button>
              </div>
          </div>
        </div>
     </div>
    )
}

export default MenuItemsDetails