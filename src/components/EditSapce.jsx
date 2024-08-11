import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

function EditSpace({ onEditComplete }) {
    const [product, setProduct] = useState({
        imageUrl: '',
        spaceTitle: '',
    });
    const { id } = useParams();

    const getSingleProduct = async () => {
        try {
            const response = await axios.get(`/api/restaurant/getSpaceById/${id}`);
            setProduct(response.data.data);
        } catch (error) {
            console.error('Error fetching the product:', error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/restaurant/editSpace/${id}`, product);
            toast.success("Amenity edited successfully");
            if (onEditComplete) onEditComplete(); 
        } catch (err) {
            console.error('Error editing the product:', err);
        }
    };

    return (
        
            <div className="bg-white p-10  rounded-lg shadow-2xl w-1/2">
                <h1 className="text-2xl font-bold  text-gray-800 mb-16">EDIT SPACE</h1>
                <form onSubmit={handleEdit} className="space-y-6">
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="url"
                            placeholder='Image link'
                            name="imageUrl"
                            value={product.imageUrl}
                            onChange={handleChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="spaceTitle" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            placeholder='Title'
                            name="spaceTitle"
                            value={product.spaceTitle}
                            onChange={handleChange}
                            className='mt-1 border border-gray-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                            required
                        />
                    </div>
                    <button type="submit" className='w-full bg-red-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200'>
                        Edit Space
                    </button>
                </form>
            </div>
        
    );
}

export default EditSpace;
