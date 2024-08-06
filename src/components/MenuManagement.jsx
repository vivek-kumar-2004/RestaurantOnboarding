import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

const MenuManagement = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getItems = () => {
        axios.get("/api/restaurant/getMenuItem")
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.itemTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='w-full bg-gray-100'>
            <div className='sticky top-0 bg-zinc-200 z-50 shadow-lg '>
                <h2 className="text-3xl text-red-950 text-center font-bold mb-8 pt-6">MENU MANAGEMENT</h2>
                <div className='flex justify-between item-center px-[2.1vw] py-2 '>
                    <Link to="/admin/CreateMenuItem">
                        <button className='py-1 px-3 bg-red-950 rounded-md text-white mb-6'>Add New Items</button>
                    </Link>
                    <div>
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="py-[5px] px-3 w-[20vw] rounded-lg outline-sky-600 border-2 border-red-950"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap gap-3 px-[2.6vw] pt-4 pb-4'>
                {filteredItems.map((p, index) => (
                    <div key={index} className='w-[14.5vw] h-[42vh] mt-2 bg-white p-3 flex flex-col items-center justify-between border rounded-lg shadow-2xl transition-transform transform hover:scale-105'>
                        <div className='w-full h-[70%] mb-2 overflow-hidden'>
                            <img className='w-[100%] h-[100%] object-cover' src={`${p.imageUrl}`} alt="" />
                        </div>
                        <h1 className='font-bold tracking-tight text-blue-950 leading-5 text-xl mb-1'>{p.itemTitle}</h1>
                        <h1 className='tracking-tight leading-5 text-green-700 font-bold mb-2'><span className='font-bold text-blue-950 text-m mr-1'>Price:</span>${p.price}</h1>
                        <Link className='py-1 px-3 bg-red-950 rounded-md text-white' to={`/admin/menuItemsDetails/${p._id}`}>View Item</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuManagement;
