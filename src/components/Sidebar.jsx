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
        { title: "Dashboard", icon: <IoHome />, path: "/admin" },
        { title: "Profile", icon: <FaCircleUser />, gap: true, path: "/admin/profile" },
        { title: "Menu", icon: <BiSolidFoodMenu />, path: "/admin/menu" },
        { title: "Amenity", icon: <BiSolidCool />, path: "/admin/amenity" },
        { title: "Space", icon: <TbSpaces />, path: "/admin/space" },
    ];

    const Logout = [
        { title: "Logout", icon: <CiLogout />, gap: true, path: "/admin" },
    ];

    return (
        <div className={`flex bg-[#F7F6FB] border-r-2 border-gray-400 bg-red-900 ${open ? "transition-all duration-300 ease-in-out" : ""}`}>
            <div className={`${open ? "w-[15.6vw]" : "w-20"} h-screen p-5 pt-8 relative duration-300 transition-all ease-in-out fixed`}>
                <img
                    src={`${open ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACzs7Pv7+8SEhLy8vJISEhWVlaxsbG1tbW+vr6/v78ODg4VFRW7u7sRERFFRUU5OTlTU1MwMDAfHx+jo6N0dHRaWlrf39/Nzc1BQUH4+PgiIiIbGxugoKDGxsaSkpJnZ2fd3d2FhYWKiop8fHyXl5crKyvU1NRvb29I+vVMAAAFCUlEQVR4nO2di1biMBRFE1+DD1CsAj4BQUf//wcHZwkWaZtz0+SS1LM/4K5sT5IbKjTGEEIIIYQQQgghhBBCCCGE/Aqms/GwGM7f3gPWnNyO7oviejl4CFjUj4eZ3dC/DVR0MPwu+noYqKgnPbtF/y5Azclwu+gyQE1v5vYns9Y1Bzs17/c3VU92BrOaVS1r7gpae3kcZLhyqgStfWtV87yyZhFoxEKuKgdj7UuLmtWC7WeGF9UJrrj3r1knaO0k3MBR6hJc4b2h1gvaj5Bjh6hNsMVoGgSt1d5PmwSt9avZKGjPwwq4aJiin3jtNc2CdhHaoZHmBK0deNR0CNrr4BYNOBK01uN86hK0w/AetbgS9DF0Cmo2fWeC1vakNd2CbbqsEHeC8oYICNpRFJsKgAStFR6UEUGfte0FkqB0QkGCVumDMCQoXIaYoNIyhKao8EiDCSodabAE7YGkJih4EstpCzDBsaQmKKizCsEERZ0ZFQzxgMsJmOCN5FMOKngWzaoEmGC+gmCCjzEEVbZRCkYU7PwUTWmTeZSct1FBn6cFYvbZJlQE0TaRbYKg4BMTLJGlIBMsQUEKBiSG4BkF0xN8kghWfQkhdcG+pE3kmGC/81NUkmCOU7Tza5CCZSiYoKBoF6XgF6fRrErssw9SMAScol+Ckv/lZSnIBEtQMEVBTtESObYJ0c8echS8kCSIPjZMSfCo6wkedX0Ndn6TYYJlchTsfIKdF7yI8e+zpATZ6EvkOEU7vwajtAnRF8F9iZEgugZVBF+xsYgSvEtJ8AAby6VE8CElQXAwIkHzkZCgWUJjETV6M0lJ0GCCsh9xYCtbSXCKjEXU6A34V1MSNAtgLLI1aMxLSoLI15pFbeKTnrumnqC5DC9o3lISBJaM/I0BbkPNt5P0naN5yjxD4EwqnqbIKUlPsft7KfQZIOt+uMczjfhlC54g01R6LoWmqVqKUT5bzLGiSikiJxCp4jFWUyvFETaafD/jG3ONjUb0nAZ8cqDzpM2YP9hoRCmCk18rRVAx5xTRiSppGmiKaU1UUetHU0xroopaf2ITNcZa5HazIa0Uc24abP1rck7xF6xFtv41Obd+MEXR90sTm6hs/RvF7qeYc9MA16JIMdMUYzSNxNZi91OMst0opTjGRiNq/adpKcb41J+YIphilLWYVooixTxTjNIXmWIofkGKMbabxFJk61/D1r9NYops/V6KaIpKnzT22TTS+jAlUsw0xYwfT8WYqImlGOPZTZ4pir49lWeKOT/wZ9PYKDLFLRJTjNH6E1Nk698oZpwit5s1otafmCJb/xrRPQmootJVuWCKokvgUEWlS6vBFEW3TYL/Jda6SRZMUXTBNJii0lIEFWVXhmIpql2WCykKpxSmqHZ9PKQo/PEipKh1lyy23UyFNRHFeRSbSoAUxT9QAxQ17+V2p/gsrulW/BvBpBZnih5rxqmoauhU9PkZpUtR7+bx/zi+5vfuU9OhqPnGgk+aUxQdajY0K2odajY0Kfpu7I2Kfn+1NjRMVO/7iRsUFdvhhtoUW+wJ9Ypqh7YydSnK34zyTZ3iItioRVSnKG/3ZaoVNQ80W1SlOGpZs1JR+JKOgMx3xtK+be2+rP5G5e74Gm5/DCZE15oU2zU/AtRswWH5NSKzQE2r9/hdc+x1QArLdHFVFMXJ0rsNVjB5Hq9qDken+1uBhBBCCCGEEEIIIYQQQgghPvwDhF1Wock08gkAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACzs7Pv7+8SEhLy8vJISEhWVlaxsbG1tbW+vr6/v78ODg4VFRW7u7sRERFFRUU5OTlTU1MwMDAfHx+jo6N0dHRaWlrf39/Nzc1BQUH4+PgiIiIbGxugoKDGxsaSkpJnZ2fd3d2FhYWKiop8fHyXl5crKyvU1NRvb29I+vVMAAAFCUlEQVR4nO2di1biMBRFE1+DD1CsAj4BQUf//wcHZwkWaZtz0+SS1LM/4K5sT5IbKjTGEEIIIYQQQgghhBBCCCGE/Aqms/GwGM7f3gPWnNyO7oviejl4CFjUj4eZ3dC/DVR0MPwu+noYqKgnPbtF/y5Azclwu+gyQE1v5vYns9Y1Bzs17/c3VU92BrOaVS1r7gpae3kcZLhyqgStfWtV87yyZhFoxEKuKgdj7UuLmtWC7WeGF9UJrrj3r1knaO0k3MBR6hJc4b2h1gvaj5Bjh6hNsMVoGgSt1d5PmwSt9avZKGjPwwq4aJiin3jtNc2CdhHaoZHmBK0deNR0CNrr4BYNOBK01uN86hK0w/AetbgS9DF0Cmo2fWeC1vakNd2CbbqsEHeC8oYICNpRFJsKgAStFR6UEUGfte0FkqB0QkGCVumDMCQoXIaYoNIyhKao8EiDCSodabAE7YGkJih4EstpCzDBsaQmKKizCsEERZ0ZFQzxgMsJmOCN5FMOKngWzaoEmGC+gmCCjzEEVbZRCkYU7PwUTWmTeZSct1FBn6cFYvbZJlQE0TaRbYKg4BMTLJGlIBMsQUEKBiSG4BkF0xN8kghWfQkhdcG+pE3kmGC/81NUkmCOU7Tza5CCZSiYoKBoF6XgF6fRrErssw9SMAScol+Ckv/lZSnIBEtQMEVBTtESObYJ0c8echS8kCSIPjZMSfCo6wkedX0Ndn6TYYJlchTsfIKdF7yI8e+zpATZ6EvkOEU7vwajtAnRF8F9iZEgugZVBF+xsYgSvEtJ8AAby6VE8CElQXAwIkHzkZCgWUJjETV6M0lJ0GCCsh9xYCtbSXCKjEXU6A34V1MSNAtgLLI1aMxLSoLI15pFbeKTnrumnqC5DC9o3lISBJaM/I0BbkPNt5P0naN5yjxD4EwqnqbIKUlPsft7KfQZIOt+uMczjfhlC54g01R6LoWmqVqKUT5bzLGiSikiJxCp4jFWUyvFETaafD/jG3ONjUb0nAZ8cqDzpM2YP9hoRCmCk18rRVAx5xTRiSppGmiKaU1UUetHU0xroopaf2ITNcZa5HazIa0Uc24abP1rck7xF6xFtv41Obd+MEXR90sTm6hs/RvF7qeYc9MA16JIMdMUYzSNxNZi91OMst0opTjGRiNq/adpKcb41J+YIphilLWYVooixTxTjNIXmWIofkGKMbabxFJk61/D1r9NYops/V6KaIpKnzT22TTS+jAlUsw0xYwfT8WYqImlGOPZTZ4pir49lWeKOT/wZ9PYKDLFLRJTjNH6E1Nk698oZpwit5s1otafmCJb/xrRPQmootJVuWCKokvgUEWlS6vBFEW3TYL/Jda6SRZMUXTBNJii0lIEFWVXhmIpql2WCykKpxSmqHZ9PKQo/PEipKh1lyy23UyFNRHFeRSbSoAUxT9QAxQ17+V2p/gsrulW/BvBpBZnih5rxqmoauhU9PkZpUtR7+bx/zi+5vfuU9OhqPnGgk+aUxQdajY0K2odajY0Kfpu7I2Kfn+1NjRMVO/7iRsUFdvhhtoUW+wJ9Ypqh7YydSnK34zyTZ3iItioRVSnKG/3ZaoVNQ80W1SlOGpZs1JR+JKOgMx3xtK+be2+rP5G5e74Gm5/DCZE15oU2zU/AtRswWH5NSKzQE2r9/hdc+x1QArLdHFVFMXJ0rsNVjB5Hq9qDken+1uBhBBCCCGEEEIIIYQQQgghPvwDhF1Wock08gkAAAAASUVORK5CYII="}`}
                    className={`absolute cursor-pointer -right-4 mr-4 top-0  mt-2 w-6 border-dark-purple border-2 rounded-xl ${!open && "rotate-180"}`}
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
