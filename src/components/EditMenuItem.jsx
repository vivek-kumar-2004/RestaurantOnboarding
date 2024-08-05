import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axiosConfig';
import { toast } from 'react-toastify';

function EditMenuItem() {
    const [product, setProduct] = useState({
        imageUrl: '',
        itemTitle: '',
        price: '',
    });
    const { id } = useParams();
    const navigate = useNavigate();

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
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/restaurant/editMenuItem/${id}`, product);
            toast.success("Product edited successfully");
            navigate("/admin/Menu");
        } catch (err) {
            console.error('Error editing the product:', err);
        }
    };

    return (
        <div className='w-full h-screen bg-[#F9F4F3]'>
            <div className='flex justify-center translate-y-[50%] '>
            <form className='w-[40vw] h-[65vh]' onSubmit={handleEdit}>
                <h1 className='font-bold text-3xl mb-5 text-blue-950'>Edit Item</h1>
                <input
                    className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                    type="url"
                    placeholder='Image link'
                    onChange={handleChange}
                    value={product.imageUrl}
                    name="imageUrl"
                    required
                />
                <input
                    className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                    type="text"
                    placeholder='Title'
                    onChange={handleChange}
                    value={product.itemTitle}
                    name="itemTitle"
                    required
                />
                <input
                    className='outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3'
                    type="number"
                    placeholder='Price'
                    onChange={handleChange}
                    value={product.price}
                    name="price"
                    required
                />
                <button
                    type="submit"
                    className='py-1 px-3  bg-red-900 shadow rounded-md text-white  mt-2 mb-6'
                >
                    Edit Item
                </button>
            </form>
            </div>
        </div>
    );
}

export default EditMenuItem;
