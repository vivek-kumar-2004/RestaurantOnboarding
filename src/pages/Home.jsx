import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import AboutUs from './AboutUs';
import Footer from '../components/Footer';
import './Home.css';
import img3 from '../assets/img2.jpg';

const Home = () => {
    const data = [
        {
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
    ];

    return (
        <div className="font-outfit">
            <Navbar />
            <Parallax bgImage={img3} strength={500}>
                <div className="relative w-full h-[90vh] flex items-center justify-center text-center text-white">
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                        <h1 className="text-4xl md:text-6xl font-bold pb-2">Register Your Restaurant</h1>
                        <p className="text-lg  md:text-xl mt-4 md:mt-8 mb-4 md:mb-8 px-12">
                            Welcome to the Food Delivery Admin Panel. Streamline your food delivery operations with our robust admin tools. Efficiently manage orders, restaurants, and users to ensure smooth and timely deliveries. Our platform empowers you to take control of every aspect of your service, enhancing productivity and customer satisfaction.
                        </p>
                        <div className="flex space-x-4 justify-center">
                            <Link to="/register">
                                <button className="modern-btn">Register</button>
                            </Link>
                            <Link to="/signin">
                                <button className="modern-btn">Sign In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className="container mx-auto px-4 md:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {data.map((item, i) => (
                        <section key={i} className="bg-white p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105">
                            <img className="mx-auto w-32 h-32 object-cover rounded-full" src={item.image} alt={item.title} />
                            <h3 className="text-xl font-bold mt-6 mb-2 text-center">{item.title}</h3>
                            <p className="text-center text-gray-700">{item.description}</p>
                        </section>
                    ))}
                </div>
            </div>
            <Parallax bgImage="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7" strength={300} className="bg-cover bg-center">
                <div className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                        <h2 className="text-3xl md:text-4xl font-bold">Discover Our Story</h2>
                        <p className="text-lg md:text-xl mt-4">
                            Our journey began with a passion for great food and exceptional service. Join us to explore our culinary delights.
                        </p>
                    </div>
                </div>
            </Parallax>
            <div id="about" className="mt-2">
                <AboutUs />
            </div>
            <div id="footer" className="mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default Home; 