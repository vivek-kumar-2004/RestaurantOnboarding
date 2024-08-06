import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between items-center px-10 '>
        <img className='w-[7vw] ' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1722530652/uploadFolder/zu7jxtjk4p0yivuv4qlv.png" alt="" />
        <div>
            <div className="flex gap-8">
                <a href='#about' className='font-bold text-lg ml-1 mt-2' >
                    About Us
                </a>
                <a href="#footer" className='font-bold text-lg ml-1 mt-2'  >
                    Contact Us
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar