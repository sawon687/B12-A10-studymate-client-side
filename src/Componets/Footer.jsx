import React from 'react';
import { FaBookOpen, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900   text-gray-300 py-10 px-4 md:px-12 flex flex-col items-center gap-10 relative overflow-hidden">

      {/* Animated Background Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-purple-600 opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-green-500 opacity-20 blur-3xl animate-pulse-slow delay-2000"></div>

      {/* Logo & Tagline */}
      <div className="flex flex-col items-center gap-4 text-center z-10">
        <Link
          to="/"
          className="flex items-center gap-4 text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex justify-center items-center rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <FaBookOpen className="text-white text-3xl" />
          </div>
          <span className="text-4xl md:text-5xl">StudyMate</span>
        </Link>
        <p className="text-white/80 text-base md:text-lg max-w-lg mt-2">
          Learn, grow, and connect with learners worldwide.
        </p>
      </div>

      {/* Social Icons */}
      <ul className="flex gap-6 mt-6 z-10">
        {[FaFacebook, FaSquareXTwitter, FaLinkedin, FaSquareInstagram].map((Icon, index) => (
          <li key={index} className="transition-transform transform hover:scale-125 hover:text-white/90 cursor-pointer shadow-lg hover:shadow-2xl rounded-full p-2 bg-white/10 dark:bg-gray-800/30">
            <Icon size={30} className="text-white" />
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-t border-white/20 w-full max-w-4xl mt-8 z-10"></div>

      {/* Copyright */}
      <p className="text-white/70 mt-6 text-sm md:text-base z-10">
        © 2026 Md Al Jihad Sawon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
