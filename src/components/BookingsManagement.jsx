import React, { useEffect } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import axios from '../axiosConfig';

const BookingsManagement = () => {
    const { bookings, setBookings } = useRestaurant();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axios.get('/restaurants/bookings');
                setBookings(res.data.bookings);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBookings();
    }, [setBookings]);

    const updateBookingStatus = async (id, status) => {
        try {
            const res = await axios.put('/restaurants/bookings', { id, status });
            setBookings(res.data.bookings);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h2 className="text-2xl mb-6">Bookings Management</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking._id} className="mb-2">
                        <p>{booking.details}</p>
                        <select
                            value={booking.status}
                            onChange={e => updateBookingStatus(booking._id, e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingsManagement;
