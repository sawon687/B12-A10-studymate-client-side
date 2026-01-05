import React from 'react';
import { FaBookOpen, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 md:px-12 flex flex-col items-center gap-6 relative overflow-hidden">

      {/* Animated Background Circles */}
      <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full bg-purple-600 opacity-20 blur-2xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-green-500 opacity-20 blur-2xl animate-pulse-slow delay-2000"></div>

      {/* Logo & Tagline */}
      <div className="flex flex-col items-center gap-2 text-center z-10">
       <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center rounded-xl shadow-lg transform transition-all hover:scale-105">
              <FaBookOpen className="text-white text-2xl" />
            </div>
            <span className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl">
              StudyMate
            </span>
          </Link>
        <p className="text-white/80 text-sm md:text-base max-w-md">
          Learn, grow, and connect with learners worldwide.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row gap-4 text-white/70 text-xs md:text-sm z-10 mt-2 text-center">
        <p>Email: <a href="mailto:info@studymate.com" className="hover:text-white transition-colors">info@studymate.com</a></p>
        <p>Phone: <a href="tel:+880123456789" className="hover:text-white transition-colors">+880 123 456 789</a></p>
      </div>

      {/* Social Icons */}
      <ul className="flex gap-4 mt-4 z-10">
        {[{
          icon: FaFacebook,
          link: 'https://facebook.com'
        },{
          icon: FaSquareXTwitter,
          link: 'https://twitter.com'
        },{
          icon: FaLinkedin,
          link: 'https://linkedin.com'
        },{
          icon: FaSquareInstagram,
          link: 'https://instagram.com'
        }].map(({icon: Icon, link}, index) => (
          <li key={index} className="transition-transform transform hover:scale-110 cursor-pointer rounded-full p-2 bg-white/10 dark:bg-gray-800/30">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon size={24} className="text-white" />
            </a>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-t border-white/20 w-full max-w-3xl mt-4 z-10"></div>

      {/* Copyright */}
      <p className="text-white/70 mt-3 text-xs md:text-sm z-10 text-center">
        © 2026 Md Al Jihad Sawon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
