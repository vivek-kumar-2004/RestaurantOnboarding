import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../axiosConfig';
import { toast } from 'react-toastify';
import { FaBackward } from "react-icons/fa";
import EditMenuItem from './EditMenuItem';

function MenuItemsDetails() {
    const navigate = useNavigate(); 
    const [product, setProduct] = useState({});
    const { id } = useParams();
    
    const getSingleProduct = async () => {
        try {
            const response = await axios.get(`/api/restaurant/getmenuItemById/${id}`);
            setProduct(response.data.data);
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    },[id]);

    const handleProductDelete = async (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`/api/restaurant/deleteMenuItem/${productId}`);
                toast.success("Product deleted successfully");
                navigate(-1);
            } catch (err) {
                console.error(err);
                toast.error("Failed to delete product");
            }
        }
    };

    const handleEditComplete = () => {
      // Trigger a re-fetch of the product details
      getSingleProduct();
  };


    return (
      <div className='pt-5 bg-gray-100'>
          <button onClick={() => navigate(-1)} className="bg-blue-900 text-white text-lg font-semibold ml-10 py-1 px-3 rounded-md shadow hover:bg-blue-700 transition">
              <FaBackward className="inline-block mr-2" /> Back
          </button>
          <div className="flex  p-10 pt-5 gap-8">
            <div className="w-1/2 bg-white p-8 rounded-lg shadow-2xl h-[83vh]">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 ">ITEM DETAILS</h1>
                <div className="w-full mb-4">
                    <img className="w-full h-[45vh] object-cover shadow-md" src={product.imageUrl} alt={product.itemTitle} />
                </div>
                <h2 className="text-xl font-semibold text-gray-600 mb-4"><span className='font-bold text-black text-2xl text-m mr-1'>Item Name:</span>{product.itemTitle}</h2>
                <p className="text-xl text-green-700 font-bold mb-4"><span className='font-bold text-black text-2xl mr-1'>Price:</span>${product.price}</p>
                <button onClick={() => handleProductDelete(product._id)} className="bg-red-900 text-white text-lg font-semibold py-[5px] px-3 rounded-lg shadow hover:bg-red-700 transition">
                        Delete Item
                </button>
            </div>
            <EditMenuItem onEditComplete={handleEditComplete}/>
          </div>
      </div>
        
    );
}

export default MenuItemsDetails;
