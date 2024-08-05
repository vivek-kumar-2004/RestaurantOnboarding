import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-300 py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-[28%] mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>We are a leading food delivery service bringing your favorite meals to you quickly and reliably.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p >Email: <a href="mailto:support@fooddelivery.com" className="underline">support@fooddelivery.com</a></p>
          <p >Phone: +1 234 567 890</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" hover:text-white">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-white">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p >&copy; 2024 Food Delivery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
