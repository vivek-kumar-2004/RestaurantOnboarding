import React from 'react';
import { FcSalesPerformance } from "react-icons/fc";
import { FaBoxOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, BarElement, Title, Tooltip, Legend, PointElement } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement // Register PointElement for handling point elements
  );
function Dashboard_UI() {
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Sales Over Time',
                data: [30, 45, 70, 85, 120, 130, 150],
                borderColor: 'rgba(53,162,235,1)',
                backgroundColor: 'rgba(53,162,235,0.2)',
                fill: true,
            },
        ],
    };

    const barChartData = {
        labels: ['Appetizers', 'Main Course', 'Desserts', 'Drinks'],
        datasets: [
            {
                label: 'Sales by Category',
                data: [150, 200, 120, 80],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    const monthlyRevenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Monthly Revenue',
                data: [1200, 1500, 1700, 2000, 2400, 2600, 2800],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const trending_orders=[
        {src:"http://metropolitanhost.com/themes/themeforest/react/costic/static/media/food-5.c53dd95c.jpg", title:"Meat Stew", price:"$25.00", orders:"15", income:"$175"},
        {src:"http://metropolitanhost.com/themes/themeforest/react/costic/static/media/food-2.e470ce78.jpg", title:"Pancake", price:"$50.00", orders:"75", income:"$275"},
        {src:"http://metropolitanhost.com/themes/themeforest/react/costic/static/media/food-4.c872fffa.jpg", title:"Burger", price:"$45.00", orders:"85", income:"$575"},
        {src:"http://metropolitanhost.com/themes/themeforest/react/costic/static/media/food-3.50d620d7.jpg", title:"Saled", price:"$85.00", orders:"175", income:"$775"},
    ]
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* Statistics Cards */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-2xl mr-4">
                            <FcSalesPerformance />
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-sm">Total Sales</h3>
                            <p className="text-2xl font-semibold">$12,345</p>
                        </div>
                    </div>
                    <div className="text-green-700 text-3xl">
                        <FaArrowUp />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-14 h-14 bg-red-900 text-white rounded-full flex items-center justify-center text-2xl mr-4">
                            <FaBoxOpen />
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-sm">New Orders</h3>
                            <p className="text-2xl font-semibold">234</p>
                        </div>
                    </div>
                    <div className="text-red-900 text-3xl">
                        <FaArrowDown />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-14 h-14 bg-blue-800 text-white rounded-full flex items-center justify-center text-2xl mr-4">
                            <FaStar />
                        </div>
                        <div>
                            <h3 className="text-gray-600 text-sm">Pending Reviews</h3>
                            <p className="text-2xl font-semibold">12</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-gray-600 text-lg font-semibold mb-4">Sales Over Time</h2>
                <div className="h-72">
                    <Line data={lineChartData} />
                </div>
            </div>

            {/* Sales by Category */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-gray-600 text-lg font-semibold mb-4">Sales by Category</h2>
                <div className="h-72">
                    <Bar data={barChartData} />
                </div>
            </div>

            {/* Monthly Revenue */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-gray-600 text-lg font-semibold mb-4">Monthly Revenue</h2>
                <div className="h-72">
                    <Line data={monthlyRevenueData} />
                </div>
            </div>

            {/* Trending Orders */}
            <div className="bg-white h-[45vh] px-8 rounded-lg shadow-lg  flex flex-col gap-5">
                <h2 className="text-gray-600 text-lg font-semibold mb-1 mt-3 pb-5 border-b-2">Trending Orders</h2>
                <div className='flex gap-10'>
                    {trending_orders.map((item,i)=>(
                        <div  className='w-[16.5vw] h-[30vh]  bg-white flex flex-col items-center border rounded-md overflow-hidden shadow-2xl transition-transform transform hover:scale-105'>
                            <div className='w-full h-[55%] mb-2 '>
                                <img className='w-[100%] h-[100%] object-cover' src={item.src} alt="" />
                            </div>
                            <div className='w-full flex justify-between mt-2 px-5'>
                                <h1 className='font-semibold tracking-tight text-blue-950 leading-5 text-lg mb-1'>{item.title}</h1>
                                <h1 className='font-bold tracking-tight leading-5 text-green-700 mb-2'>{item.price}</h1>
                            </div>
                            <div className='flex gap-[4vw] mt-2'>
                                <h1 className='tracking-tight text-red-600 leading-5 text-s mb-1'><span className='text-blue-950 text-m mr-1'>Orders</span>{item.orders}</h1>
                                <h1 className='tracking-tight  text-red-600 text-s mb-2'><span className='text-blue-950 text-m mr-1'>Income</span>{item.income}</h1>
                            </div>
                        </div>
                ))}
                </div>
            
            </div>
        </div>
  )
}

export default Dashboard_UI