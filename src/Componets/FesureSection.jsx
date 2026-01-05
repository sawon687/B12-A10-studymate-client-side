import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaGraduationCap } from "react-icons/fa";

const FeatureSection = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-6xl mb-4 mx-auto text-gradient" />,
      title: "Expert Tutors",
      desc: "Learn from industry experts.",
    },
    {
      icon: <FaBook className="text-6xl mb-4 mx-auto text-gradient" />,
      title: "Interactive Courses",
      desc: "Hands-on learning for all levels.",
    },
    {
      icon: "🎯",
      title: "Goal Oriented",
      desc: "Track your progress efficiently.",
    },
  ];

  return (
    <section className="relative container max-w-[1370px] mx-auto px-4 py-20 transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-40 w-96 h-96 rounded-full bg-indigo-400 opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-40 w-96 h-96 rounded-full bg-purple-400 opacity-20 blur-3xl animate-pulse-slow delay-2000"></div>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Our Features
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className="relative p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-white/30 dark:bg-gray-900/60 border border-white/10 dark:border-gray-700 cursor-pointer transition-all"
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow: "0 25px 35px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
          >
            {/* Icon */}
            <div className="mb-4 text-6xl">{feat.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              {feat.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300">{feat.desc}</p>

            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-2xl -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
