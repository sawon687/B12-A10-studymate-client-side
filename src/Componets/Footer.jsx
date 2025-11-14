import React from 'react';
import { FaBookOpen, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-gray-300 py-12 flex flex-col items-center gap-6">
      
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center gap-2 text-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center rounded-xl">
            <FaBookOpen className="text-white text-2xl" />
          </div>
          <span className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent text-4xl">
            StudyMate
          </span>
        </Link>
        <p className="text-gray-300 text-lg md:text-xl max-w-md">
          Connecting learners to study smarter.<br />
          Grow together and achieve more.
        </p>
      </div>

      {/* Social Icons */}
      <ul className="flex gap-6 mt-4">
        {[FaFacebook, FaSquareXTwitter, FaLinkedin, FaSquareInstagram].map((Icon, index) => (
          <li key={index} className="transition-transform transform hover:scale-110 hover:text-blue-400">
            <Icon size={30} className="text-white" />
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="text-gray-400 mt-6 text-sm md:text-base">
        © 2025 Md Al Jihad Sawon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
