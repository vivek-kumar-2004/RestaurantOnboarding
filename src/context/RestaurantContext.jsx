// import React, { createContext, useState, useContext,  } from 'react';
// const RestaurantContext = createContext();

// export const RestaurantProvider = ({ children }) => {
//     const [restaurant, setRestaurant] = useState({});
//     const [menuItems, setMenuItems] = useState([]);
//     const [amenities, setAmenities] = useState([]);
//     const [spaces, setSpaces] = useState([]);
//     const [timings, setTimings] = useState({});
//     const [bookings, setBookings] = useState([]);
   
//     return (
//         <RestaurantContext.Provider
//             value={{
//                 restaurant, setRestaurant,
//                 menuItems, setMenuItems,
//                 amenities, setAmenities,
//                 spaces, setSpaces,
//                 timings, setTimings,
//                 bookings, setBookings,
//             }}
//         >
//             {children}
//         </RestaurantContext.Provider>
//     );
// };

// export const useRestaurant = () => useContext(RestaurantContext);
