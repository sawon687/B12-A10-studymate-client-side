import React, { useEffect } from "react";
import { Link } from "react-router";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-5">
      
      {/* Glassmorphism Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl flex flex-col items-center animate-fadeIn">
        
        {/* Animated ! */}
        <div className="w-48 h-48 border-8 border-red-500 rounded-full flex justify-center items-center animate-pulse">
          <h1 className="text-red-500 font-extrabold text-[8rem] drop-shadow-2xl">
            !
          </h1>
        </div>

        {/* Text */}
        <p className="text-red-400 font-bold text-4xl mt-5 tracking-wide drop-shadow-md">
          404 — Page Not Found
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-700/40"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
