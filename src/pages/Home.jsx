import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AboutUs from './AboutUs';
import Footer from '../components/Footer';

const  Home = () => {
    const data=[{
        title: 'Master Chefs',
        description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
        image: 'https://res.cloudinary.com/dqsqywrrk/image/upload/v1722527993/uploadFolder/e4hllrz7m8vzibznephu.png'
    },
    {
        title: 'Quality Food',
        description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
        image: 'https://res.cloudinary.com/dqsqywrrk/image/upload/v1722527832/uploadFolder/w1oa5xdn96t22qtvs5he.png'
    },
    {
        title: 'Online Order',
        description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
        image: 'https://res.cloudinary.com/dqsqywrrk/image/upload/v1722526974/uploadFolder/bec9r3faowsh58eeh9al.png'
    },
    {
        title: '24/7 Service',
        description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
        image: 'https://res.cloudinary.com/dqsqywrrk/image/upload/v1722527631/uploadFolder/zzvjgss5a2lpmaytechi.png'
    }
]
    return (
    <div className="">
      <Navbar/>
      <div className='w-full h-[90vh]  flex justify-between pt-8 px-10 mb-16'>
            <div className='w-1/2  pt-24' >
                <h1 className='text-6xl font-bold'>Register Your restaurant</h1>
                <p className='text-lg leading-6 font-semibold text-zinc-700 mt-8 mb-8'>Welcome to the Food Delivery Admin Panel. Streamline your food delivery operations with our robust admin tools. Efficiently manage orders, restaurants, and users to ensure smooth and timely deliveries. Our platform empowers you to take control of every aspect of your service, enhancing productivity and customer satisfaction.</p>
                <div className="flex space-x-4">
                    <Link to="/register">
                        <button className='py-1 px-4 bg-red-800 shadow rounded-md text-white font-semibold text-lg ml-1 mt-2'>Register</button>
                    </Link>
                    <Link to="/signin">
                        <button className='py-1 px-4 bg-red-800 shadow rounded-md text-white font-semibold text-lg ml-1 mt-2'>Sign In</button>
                    </Link>
                </div>
            </div>
            <div className='object-cover'>
                <img className='w-[35vw] mt-5' src="https://themewagon.github.io/restoran/img/hero.png" alt="" />
            </div>
           
      </div>
      <div className="flex gap-12 px-10 ">
        {data.map((item,i)=>(
            <section className="bg-[#fffff] p-6 w-[25vw] rounded-lg shadow-2xl  transition-transform transform hover:scale-105 ">
            <img className='mx-auto' src={item.image} alt="" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </section>
        ))}
      </div>
      <AboutUs/>
      <Footer/>
    </div>
    );
};

export default Home;
