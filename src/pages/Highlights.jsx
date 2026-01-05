import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaClock,
  FaStar,
  FaGlobeAsia,
} from "react-icons/fa";

const Highlights = () => {
  const highlights = [
    {
      icon: <FaUsers className="text-5xl mx-auto mb-3 text-indigo-500" />,
      title: "10K+ Students",
      desc: "Active learners connected through StudyMate.",
    },
    {
      icon: <FaClock className="text-5xl mx-auto mb-3 text-cyan-500" />,
      title: "24/7 Support",
      desc: "Find study partners and mentors anytime.",
    },
    {
      icon: <FaStar className="text-5xl mx-auto mb-3 text-yellow-400" />,
      title: "Top Rated",
      desc: "Trusted by students for effective learning.",
    },
    {
      icon: <FaGlobeAsia className="text-5xl mx-auto mb-3 text-purple-500" />,
      title: "Global Community",
      desc: "Connect with students from different regions.",
    },
  ];

  return (
    <section className="relative max-w-[1370px] mx-auto px-4 py-24">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-28 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      {/* Title */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16
        bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
      >
        StudyMate Highlights
      </h2>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="relative p-8 rounded-3xl text-center
            bg-white/70 dark:bg-gray-900/70
            border border-gray-200 dark:border-gray-700
            shadow-lg backdrop-blur-xl"
          >
            {/* Soft Glow */}
            <div
              className="absolute inset-0 rounded-3xl 
              bg-gradient-to-br from-indigo-500/10 to-purple-600/10 
              blur-2xl -z-10"
            ></div>

            {/* Icon */}
            {item.icon}

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
