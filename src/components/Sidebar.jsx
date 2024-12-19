import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BiSolidCool } from "react-icons/bi";
import { TbSpaces } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ open, setOpen }) => {
    const location = useLocation();
    console.log(location);

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem('token'); 
            navigate('/signin'); 
        }
    };

    const Menus = [
        { title: "Dashboard", icon: <IoHome />, path: "/restaurant_manager" },
        { title: "Profile", icon: <FaCircleUser />, gap: true, path: "/restaurant_manager/profile" },
        { title: "Menu", icon: <BiSolidFoodMenu />, path: "/restaurant_manager/menu" },
        { title: "Amenity", icon: <BiSolidCool />, path: "/restaurant_manager/amenity" },
        { title: "Space", icon: <TbSpaces />, path: "/restaurant_manager/space" },
    ];

    const Logout = [
        { title: "Logout", icon: <CiLogout />, gap: true, path: "/" },
    ];

    return (
        <div className={`flex bg-[#F7F6FB] border-r-2 border-gray-400 bg-red-900 ${open ? "transition-all duration-300 ease-in-out" : ""}`}>
            <div className={`${open ? "w-[15.6vw]" : "w-20"} h-screen p-5 pt-8 relative duration-300 transition-all ease-in-out fixed`}>
                <img
                    src={`${open ? "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2030%2030%22%3E%3Cpath%20fill%3D%22%23fcfcfc%22%20fill-rule%3D%22evenodd%22%20d%3D%22M27%2014.5C27%207.596%2021.404%202%2014.5%202S2%207.596%202%2014.5%207.596%2027%2014.5%2027%2027%2021.404%2027%2014.5zm-24%200C3%208.149%208.149%203%2014.5%203S26%208.149%2026%2014.5%2020.851%2026%2014.5%2026%203%2020.851%203%2014.5zm7.49.354%205.656%205.656a.5.5%200%200%200%20.708%200l.707-.707a.5.5%200%200%200%200-.707L12.964%2014.5l4.597-4.596a.5.5%200%200%200%200-.707l-.707-.707a.5.5%200%200%200-.708%200l-5.656%205.656a.495.495%200%200%200%200%20.708z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3C%2Fsvg%3E":"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2030%2030%22%3E%3Cpath%20fill%3D%22%23fcfcfc%22%20fill-rule%3D%22evenodd%22%20d%3D%22M27%2014.5C27%207.596%2021.404%202%2014.5%202S2%207.596%202%2014.5%207.596%2027%2014.5%2027%2027%2021.404%2027%2014.5zm-24%200C3%208.149%208.149%203%2014.5%203S26%208.149%2026%2014.5%2020.851%2026%2014.5%2026%203%2020.851%203%2014.5zm7.49.354%205.656%205.656a.5.5%200%200%200%20.708%200l.707-.707a.5.5%200%200%200%200-.707L12.964%2014.5l4.597-4.596a.5.5%200%200%200%200-.707l-.707-.707a.5.5%200%200%200-.708%200l-5.656%205.656a.495.495%200%200%200%200%20.708z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3C%2Fsvg%3E"}`}
                    className={`absolute cursor-pointer -right-4 mr-4 top-0  mt-2 w-8  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <img
                    src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722530652/uploadFolder/zu7jxtjk4p0yivuv4qlv.png"
                    className={`w-12 mt-4 cursor-pointer mx-auto duration-500 ${open && "rotate-[360deg]"}`}
                />
                <h1
                    className={`mt-2 text-white text-center origin-left font-bold text-xl duration-200 ${!open && "scale-0"}`}
                >
                    Dine On Time
                </h1>
                
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <NavLink 
                            to={Menu.path} 
                            key={index}
                            className={() => 
                                `flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-m items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${ location.pathname === Menu.path ? "bg-red-950 " : ""}`
                            }
                        >
                            <div className="icon text-xl font-bold">{Menu.icon}</div>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </NavLink>
                    ))}
                    {Logout.map((Menu, index) => (
                        <NavLink  
                            to={Menu.path} 
                            key={index}
                            onClick={handleLogout}
                            className={() => 
                                `flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-m items-center gap-x-4 ${Menu.gap ? "mt-48" : "mt-2"} `
                            }
                        >
                            <div className="icon text-2xl font-bold">{Menu.icon}</div>
                            <span className={`${!open && "hidden"} origin-left duration-200 text-m font-semibold`}>
                                {Menu.title}
                            </span>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
