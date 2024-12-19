import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import axios from '../axiosConfig';
import { IoEyeOutline } from "react-icons/io5";

const MenuManagement = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const { open } = useOutletContext();

    const getItems = () => {
        axios.get("/api/restaurant/getMenuItem")
            .then((response) => {
                setItems(response.data.data);
                const prices = response.data.data.map(item => item.price);
                setMinPrice(Math.min(...prices));
                setMaxPrice(Math.max(...prices));
                setPriceRange([Math.min(...prices), Math.max(...prices)]);
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

    const handlePriceRangeChange = (e) => {
        const value = Number(e.target.value);
        const index = Number(e.target.dataset.index);
        const newRange = [...priceRange];
        newRange[index] = value;
        setPriceRange(newRange);
    };

    const filteredItems = items.filter((item) =>
        item.itemTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

    return (
        <div className='w-full'>
            <div className='sticky top-0 z-50 bg-white shadow-xl bg-white border-b-2 border-t-2 border-r-2 border-gray-400'>
                <h2 className="text-3xl text-black text-center font-bold pt-3 mb-4">Menu Management</h2>
                <div className={`flex justify-between items-center ${open ? 'px-[4.1vw]' : 'pl-[1.2vw] pr-[2.3vw]'}`}>
                    <Link to="/restaurant_manager/CreateMenuItem">
                        <button className='py-2 px-3 bg-red-800 rounded-lg text-white font-semibold mb-6'>Add New Items</button>
                    </Link>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="py-[5px] px-3 w-[16vw] rounded-lg outline-sky-600 border-2 border-red-950 bg-gray-100"
                        />
                        <div className="flex flex-col">
                            <span>Price Range: ${priceRange[0]} - ${priceRange[1]}</span>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min={minPrice}
                                    max={maxPrice}
                                    value={priceRange[0]}
                                    data-index="0"
                                    onChange={handlePriceRangeChange}
                                    className="w-[100px]"
                                />
                                {/* <input
                                    type="range"
                                    min={minPrice}
                                    max={maxPrice}
                                    value={priceRange[1]}
                                    data-index="1"
                                    onChange={handlePriceRangeChange}
                                    className="w-[100px] "
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full h-auto flex flex-wrap transition-all duration-300 ease-in-out ${open ? 'gap-7 px-[3.7vw]' : 'gap-[0.9vw] px-[1.1vw]'} pt-7 pb-4 bg-white border-r-2 border-gray-400`}>
                {filteredItems.map((p, index) => (
                    <div key={index} className='w-[17.5vw] h-[30vh] pb-3 flex flex-col items-center rounded-md overflow-hidden shadow-2xl'>
                        <div className='w-full h-[70%] mb-2'>
                            <img className='w-[100%] h-[100%] object-cover object-center' src={p.imageUrl} alt="" />
                        </div>
                        <div className='w-full h-[10vh] flex justify-between px-3 pt-2'>
                            <div>
                                <h1 className='font-bold tracking-tight text-black leading-5 text-xl mb-1'>{p.itemTitle}</h1>
                                <h1 className='font-bold tracking-tight leading-5 text-green-700 mb-2'><span className='font-semibold tracking-tight leading-5 text-black'>Price:</span> ${p.price}</h1>
                            </div>
                            <Link className='w-[2vw] h-[2vw] bg-zinc-200 rounded-full text-black text-lg font-bold flex items-center justify-center hover:scale-110' to={`/restaurant_manager/menuItemsDetails/${p._id}`}><IoEyeOutline /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuManagement;
