import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center px-10 pb-3 pt-2 sticky top-0 z-50 transition-colors duration-500 ease-in-out ${isScrolled ? 'bg-white' : 'bg-black'}`}>
        <img className='w-[6vw] h-[10vh] rounded-lg' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722530652/uploadFolder/zu7jxtjk4p0yivuv4qlv.png" alt="Logo" />
        <div>
            <div className={`flex gap-8 ${isScrolled ? 'text-black' : 'text-white'}`}>
                <a href='#about' className='font-bold text-lg ml-1 mt-2'>
                    About Us
                </a>
                <a href="#footer" className='font-bold text-lg ml-1 mt-2'>
                    Contact Us
                </a>
            </div>
        </div>
    </div>
  );
}

export default Navbar;