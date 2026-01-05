import React from "react";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaChalkboardTeacher,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaUserFriends className="text-6xl mb-4 mx-auto text-indigo-500" />,
      title: "Find Study Partners",
      desc: "Connect with like-minded learners to study together and stay motivated.",
    },
    {
      icon: <FaChalkboardTeacher className="text-6xl mb-4 mx-auto text-cyan-500" />,
      title: "Expert Mentorship",
      desc: "Get guidance from experienced mentors to solve academic challenges.",
    },
    {
      icon: <FaBookOpen className="text-6xl mb-4 mx-auto text-purple-500" />,
      title: "Skill-Based Learning",
      desc: "Improve your skills with focused learning paths and collaboration.",
    },
    {
      icon: <FaRocket className="text-6xl mb-4 mx-auto text-pink-500" />,
      title: "Career Growth",
      desc: "Prepare yourself for future opportunities with the right study support.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-[1370px] mx-auto px-4 py-24">
      {/* Background Effects */}
     

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 
      bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Why StudyMate?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-8 rounded-3xl border 
            bg-white/70 dark:bg-gray-900/70 
            border-gray-200 dark:border-gray-700 
            shadow-lg backdrop-blur-xl text-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl 
            bg-gradient-to-br from-indigo-500/10 to-purple-600/10 
            blur-2xl -z-10"></div>

            {/* Icon */}
            {service.icon}

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
