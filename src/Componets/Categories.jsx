import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCalculator,
  FaAtom,
  FaCode,
  FaRobot,
  FaUserFriends,
  FaChartPie,
  FaLanguage,
  FaLaptop,
} from "react-icons/fa";

const Categories = () => {
  const categories = [
    {
      icon: <FaBook />,
      title: "Bangla",
      desc: "Literature, Grammar & Writing",
    },
    {
      icon: <FaCalculator />,
      title: "Mathematics",
      desc: "Algebra, Calculus & Problem Solving",
    },
    {
      icon: <FaAtom />,
      title: "Physics",
      desc: "Concepts, Numericals & Practice",
    },
    {
      icon: <FaChartPie />,
      title: "Accounting",
      desc: "Financial, Cost & Management Accounting",
    },
    {
      icon: <FaLanguage />,
      title: "English",
      desc: "Grammar, Speaking & Writing",
    },
    {
      icon: <FaLaptop />,
      title: "ICT",
      desc: "Information & Communication Technology",
    },
    {
      icon: <FaCode />,
      title: "Programming",
      desc: "C, C++, JavaScript, Python",
    },

    {
      icon: <FaUserFriends />,
      title: "Study Partners",
      desc: "Find partners with same subjects",
    },
  ];

  return (
    <section className="container max-w-[1370px]  mx-auto px-4 ">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14
        bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
      >
        Study Categories
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="relative p-6 rounded-3xl cursor-pointer
            bg-white/40 dark:bg-gray-900/70 backdrop-blur-xl
            border border-white/20 dark:border-gray-700
            shadow-lg hover:shadow-2xl transition-all"
          >
            {/* Icon */}
            <div className="text-5xl text-indigo-500 mb-4 text-center">
              {cat.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">
              {cat.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-center text-gray-600 dark:text-gray-300">
              {cat.desc}
            </p>

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 blur-2xl -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
