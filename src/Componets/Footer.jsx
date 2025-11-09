import React from 'react';
import { BiBookOpen } from 'react-icons/bi';
import { FaBookOpen, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer bg-[#113376] flex flex-col py-10 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-center text-4xl font-bold flex items-center justify-center'><FaBookOpen/>StudyMate</h1>
                <p className='text-gray-300 text-center text-xl '>Connecting learners to study smarter.<br/>grow together and achieves more</p>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li><FaFacebook size={30} className='text-white' /></li>
                    <li><FaSquareXTwitter size={30} className='text-white'  /></li>
                    <li><FaLinkedin size={30} className='text-white' /></li>
                    <li><FaSquareInstagram size={30} className='text-white' /></li>
                    
                  
                </ul>
            </div>

              <p className='text-gray-300'>© 2025 Md Al Jihad Sawon. All rights reserved.
                    </p>
        </div>
    );
};

export default Footer;