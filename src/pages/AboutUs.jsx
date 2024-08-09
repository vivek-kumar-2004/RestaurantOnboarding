import React from 'react';

function AboutUs() {
    return (
        <div id="about" className='w-full h-auto md:h-[120vh] py-12 md:py-24 px-4 md:px-10 flex flex-col md:flex-row items-center justify-center gap-8'>
            <div className='w-full md:w-1/2 flex items-center justify-center'>
                <div className='w-full max-w-md bg-white p-4 rounded-lg shadow-lg overflow-hidden relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
                    <div className='absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 opacity-20 rounded-lg'></div>
                    <img className='relative w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722534219/uploadFolder/quydnhp4teuz5v5ho2kx.png" alt="About Us" />
                </div>
            </div>

            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center md:text-left'>About Us</h1>
                <p className='text-base md:text-lg leading-7 tracking-wide font-medium text-gray-700 mb-6 text-justify'>
                    Our Food Delivery Admin Panel is designed to streamline and optimize your food delivery service. With our robust set of tools, you can manage every aspect of your operations efficiently and effectively. Easily add, edit, or remove restaurants from your platform. Our admin panel allows you to manage restaurant profiles, menus, and pricing with ease. You can ensure that your platform always features the best and most up-to-date options for your customers.
                </p>
                <p className='text-base md:text-lg leading-7 tracking-wide font-medium text-gray-700 mb-6 text-justify'>
                    Provide exceptional customer support with our integrated support tools. Manage customer inquiries, resolve issues quickly, and maintain high levels of customer satisfaction. Our support features are designed to help you build and maintain strong relationships with your customers.
                </p>
                <p className='text-base md:text-lg leading-7 tracking-wide font-medium text-gray-700 text-justify'>
                    Security is our top priority. Our admin panel is built with robust security measures to protect your data and ensure the integrity of your operations. You can trust that your business information is safe with us. Our admin panel features a user-friendly interface that is easy to navigate and use. Whether you are a seasoned professional or new to the platform, you will find our tools intuitive and straightforward. Save time and reduce training costs with our easy-to-use system. Empower your food delivery service with our powerful admin tools and take control of your operations like never before. Experience the difference with our comprehensive and efficient platform designed to help you succeed in the competitive food delivery industry.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
