import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-[#D6D3D1] py-10 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 pb-2">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a leading food delivery service bringing your favorite meals to you quickly and reliably.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 pb-2">Contact Us</h3>
          <p className="flex items-center text-sm leading-relaxed mb-2">
            <AiOutlineMail className="text-red-500 mr-2" /> 
            <a href="mailto:support@fooddelivery.com" className="underline hover:text-red-400">support@fooddelivery.com</a>
          </p>
          <p className="flex items-center text-sm leading-relaxed">
            <AiOutlinePhone className="text-red-500 mr-2" /> 
            +1 234 567 890
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 pb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-transform transform hover:scale-125">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-transform transform hover:scale-125">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-white transition-transform transform hover:scale-125">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024 Food Delivery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;