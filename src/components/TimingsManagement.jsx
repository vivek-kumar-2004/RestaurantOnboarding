import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const TimingsManagement = () => {
    const [timings, setTimings] = useState({
        Opening_Time: '',
        Closing_Time: '',
    });

    useEffect(() => {
        const fetchTimings = async () => {
            try {
                const res = await axios.get('/api/restaurant/getTimings');
                setTimings(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTimings();
    }, []);

    const onChange = (e) => {
        setTimings({ ...timings, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/restaurant/setTimings', timings);
            setTimings(res.data);
            alert('Timings updated successfully');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="container mx-auto p-4 ">
            <h2 className="text-4xl text-center font-semibold mb-8 shadow-2xl transition-transform transform font-serif mt-16">
                Timings Management
            </h2>
            <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-2xl  transition-transform transform">
                <div className="mb-4">
                    <label className="block font-semibold text-lg">Opening Time</label>
                    <input
                        type="time"
                        name="Opening_Time"
                        value={timings.Opening_Time}
                        onChange={onChange}
                        className="outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-lg">Closing Time</label>
                    <input
                        type="time"
                        name="Closing_Time"
                        value={timings.Closing_Time}
                        onChange={onChange}
                        className="outline-sky-600 border-2 border-sky-600 shadow rounded-md  bg-zinc-200 w-full h-10 p-3 mb-3"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-red-700 text-white font-semibold text-lg py-2 rounded-full ">
                    Save
                </button>
            </form>
        </div>
    );
};

export default TimingsManagement;
