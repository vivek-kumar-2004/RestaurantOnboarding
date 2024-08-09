import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BiSolidCool } from "react-icons/bi";
import { TbSpaces } from "react-icons/tb";
// import { MdAccessTimeFilled } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", icon: <IoHome />, path: "/admin" },
        { title: "Profile", icon: <FaCircleUser />, path: "/admin" },
        { title: "Menu", icon:<BiSolidFoodMenu />, gap: true, path: "/admin/Menu" },
        { title: "Amenity", icon:<BiSolidCool />, path: "/admin/Amenity" },
        { title: "Space", icon:<TbSpaces /> , path: "/admin/Space" },
    ];

    return (
        <div className="flex bg-[#F7F6FB] border-r-2 border-gray-400">
            <div className={` ${open ? "w-[18vw]" : "w-20 "} bg-gradient-to-br from-[#EAC8EA] via-[#F7F7FB] to-[#FFFFFF] h-screen p-5 pt-8 relative duration-300 transition-all fixed`}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX///8AAAAEBAT8/PxVVVUbGxsYGBilpaVoaGgfHx/KysqysrJSUlIaGhpOTk6enp729vbp6enc3NwlJSXj4+OGhoYxMTEODg61tbVkZGSqqqqioqIqKirx8fFvb29DQ0N7e3s4ODjIyMihkwGrAAACFUlEQVR4nO3dWVYCMRCF4RjGZpJJURAQ979IbfXoA1WN5Uulcv5vBfceDekhFCkBAAAAAAAAAAAAAOJY3i/m+a5webC4X3b3OAy9Q/7VcNRRo/fsHc9i3FOLjL2z2Yy1HiPvZFZ7ZZ3PvYNZDeQVf/DOZScv+Jl3LLu+WKTxjmXXiEWK3wevZbGId6r/oEhpalkjO7HIi3csuxexSLArrdZJLDLxjmU3EYvE29rljT2lVbC9vVkpRdJ6453NYrPWeqR0PIX5DM6no97jw/bhPCy+TB6eH7adNQAAAAAAAAAANepN+035D7Gb/lQ/rPVp8ugd8q8eldduX0bF/zF+ZeW0VmvqHc5mqvVY77yj2ey0lz21vNVde+eyk1+HvnrHsnsVi1y8Y9ldxCLBlnpLPh3kneo/KFKauotUs9gv3rHs5I/fajbEai5RUt87l5V2FHAbbLmrl/HBbqzyk9YjpX0lt7r1PHyI8zjo6cbjIAAAAAAAAABAhdov5ns/o77p9hfzj3Fmo+Rxx6iEWoZXrAbe2WzUcSIL72RWM7nHm3cuO/n1W5yF/kMeOVnNWKri34Fe4yhgceouEnCNyAMng40Ja8kjQMOd8dcObIWbW6yNyV0Gu2b8+M9STtbsvYNZqV/pCXa1JY+bbPVCNTl1HdkalX/D/m3eeRLw8ycJBsXvjLmZHW78JAEAAAAAAAAAAAAAoCjvhdQ5hX0cY4IAAAAASUVORK5CYII="
                    className={`absolute cursor-pointer -right-4 mr-4 top-1  mt-2 w-7 border-dark-purple border-2 rounded-md ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722530652/uploadFolder/zu7jxtjk4p0yivuv4qlv.png"
                        className={`w-12 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                    />
                    <h1
                        className={`text-black origin-left font-bold text-xl duration-200 ${!open && "scale-0"}`}
                    >
                        Dine On Time
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <NavLink 
                            to={Menu.path} 
                            key={index}
                            className={({ isActive }) => 
                                `flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-m items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${isActive ? "bg-light-white" : ""}`
                            }
                        >
                            <div className="icon">{Menu.icon}</div>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
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
