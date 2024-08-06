import React from 'react'

function AboutUs() {
  return (
    <div id="about" className='w-full h-[120vh]  pt-24 flex gap-5 pl-3 pr-10'>
        <div className='w-1/2 '>
            <img src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722534219/uploadFolder/quydnhp4teuz5v5ho2kx.png" alt="" />
        </div>
        <div className='w-1/2 mt-12'>
            <h1 className='text-5xl font-bold '>About Us</h1>
            <p className='text-m leading-6 tracking-tight  font-semibold text-zinc-700 mt-8 mb-8 text-justify'>Our Food Delivery Admin Panel is designed to streamline and optimize your food delivery service. With our robust set of tools, you can manage every aspect of your operations efficiently and effectively.Easily add, edit, or remove restaurants from your platform. Our admin panel allows you to manage restaurant profiles, menus, and pricing with ease. You can ensure that your platform always features the best and most up-to-date options for your customers.Provide exceptional customer support with our integrated support tools. Manage customer inquiries, resolve issues quickly, and maintain high levels of customer satisfaction. Our support features are designed to help you build and maintain strong relationships with your customers.</p>
            <p className='text-m leading-6 tracking-tight font-semibold text-zinc-700 mt-8 mb-8 text-justify'>Security is our top priority. Our admin panel is built with robust security measures to protect your data and ensure the integrity of your operations. You can trust that your business information is safe with us.Our admin panel features a user-friendly interface that is easy to navigate and use. Whether you are a seasoned professional or new to the platform, you will find our tools intuitive and straightforward. Save time and reduce training costs with our easy-to-use system.Empower your food delivery service with our powerful admin tools and take control of your operations like never before. Experience the difference with our comprehensive and efficient platform designed to help you succeed in the competitive food delivery industry.</p>
        </div>
    </div>
  )
}

export default AboutUs