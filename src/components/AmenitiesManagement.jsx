import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import axios from '../axiosConfig';
import { IoEyeOutline } from "react-icons/io5";

const AmenitiesManagement = () => {
    const[Amenity,setAmenity]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { open } = useOutletContext();

    const getamenities= ()=>{
        axios.get("/api/restaurant/getAmenity")
            .then((response)=>{
                setAmenity(response.data.data);
                console.log(response.data.data);
        } )
        .catch((error)=>{
            console.log(error);
        })
}
    useEffect(()=>{
        getamenities()
    },[]) ;


    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredAmenity = Amenity.filter((item) =>
         item.amenityTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log(filteredAmenity);
    return (
        <div className='w-full '>
            <div className='sticky top-0 z-50 bg-white shadow-xl bg-white border-b-2 border-t-2 border-r-2 border-gray-400'>
                <h2 className="text-3xl text-black text-center font-bold  pt-3 mb-4">Amenity Management</h2>
                <div className={`flex justify-between item-center  ${open ? 'px-[4.1vw]' : 'pl-[1.2vw] pr-[2.3vw]' } `}>
                    <Link to="/restaurant_manager/CreateAmenity">
                        <button className='py-2 px-3 bg-red-800 rounded-lg text-white font-semibold mb-6'>Add New Amenities</button>
                    </Link>
                    <div>
                        <input
                            type="text"
                            placeholder="Search amenities..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="py-[5px] px-3 w-[16vw] rounded-lg outline-sky-600 border-2 border-red-950 bg-gray-100"
                        />
                    </div>
                </div>
            </div>
            <div className={`w-full h-auto  flex flex-wrap transition-all duration-300 ease-in-out ${open ? 'gap-7 px-[3.8vw]' : 'gap-[0.9vw] px-[1.1vw]'} pt-7 pb-4 bg-white border-r-2 border-gray-400`}>
                {filteredAmenity.map((p, index) => (
                    <div key={index} className='w-[17.5vw] h-[30vh] pb-3 flex flex-col items-center  rounded-md overflow-hidden shadow-2xl  '>
                        <div className='w-full h-[70%] mb-2  '>
                            <img className='w-[100%] h-[100%] object-cover object-center' src={p.imageUrl} alt="" />
                        </div>
                        <div className='w-full h-[10vh]  flex justify-between px-3 pt-2'>
                            <h1 className='font-bold tracking-tight text-black leading-5 text-xl mb-1'>{p.amenityTitle}</h1>
                            <Link className=' w-[2vw] h-[2vw] bg-zinc-200 rounded-full text-black text-lg font-bold flex items-center justify-center hover:scale-110' to={`/restaurant_manager/AmenityDetails/${p._id}`}><IoEyeOutline /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AmenitiesManagement;
