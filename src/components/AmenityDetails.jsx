import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../axiosConfig';
import { toast } from 'react-toastify';
import { FaBackward } from "react-icons/fa";
import EditAmenity from './EditAmenity';

function AmenityDetails() {
    const navigate = useNavigate(); 
    const [product, setProduct] = useState({});
    const { id } = useParams();
    
    const getSingleProduct = async () => {
        try {
            const response = await axios.get(`/api/restaurant/getAmenityById/${id}`);
            setProduct(response.data.data);
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    },[id]);

    const handleProductDelete = async (productId) => {
        if (window.confirm("Are you sure you want to delete this amenity?")) {
            try {
                await axios.delete(`/api/restaurant/deleteAmenity/${productId}`);
                toast.success("Amenity deleted successfully");
                navigate(-1);
            } catch (err) {
                console.error(err);
                toast.error("Failed to delete amenity");
            }
        }
    };

    const handleEditComplete = () => {
      // Trigger a re-fetch of the product details
      getSingleProduct();
  };


    return (
      <div className='pt-5 bg-gray-100'>
          <button onClick={() => navigate(-1)} className="bg-red-800 text-white text-lg font-semibold ml-10 py-1 px-3 rounded-md shadow hover:bg-red-700 transition">
              <FaBackward className="inline-block mr-2" /> Back
          </button>
          <div className="flex  p-10 pt-5 gap-8">
            <div className="w-1/2 bg-white p-8 rounded-lg shadow-2xl h-[83vh]">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 ">AMENITY DETAILS</h1>
                <div className="w-full mb-4">
                    <img className="w-full h-[45vh] object-cover shadow-md" src={product.imageUrl} alt={product.amenityTitle} />
                </div>
                <h2 className="text-xl font-semibold text-gray-600 mb-4"><span className='font-bold text-black text-2xl text-m mr-1'>Amenity Name:</span>{product.amenityTitle}</h2>
                <button onClick={() => handleProductDelete(product._id)} className="bg-red-800 text-white text-lg font-semibold py-[5px] px-3 rounded-lg shadow hover:bg-red-700 transition">
                        Delete Amenity
                </button>
            </div>
            <EditAmenity onEditComplete={handleEditComplete}/>
        </div>
    </div>
        
    );
}

export default AmenityDetails;
