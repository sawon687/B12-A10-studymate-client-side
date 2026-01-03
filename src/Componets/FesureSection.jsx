import React from 'react';
import { motion } from "framer-motion";
import {  FaBook, FaGraduationCap } from "react-icons/fa";

const FesureSection = () => {
    return (
        <div>
             {/* 2️⃣ Features Section with hover lift */}
      <section className="container max-w-[1370px] mx-auto px-4 transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-12 text-center  ">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FaGraduationCap className="text-5xl mb-4 mx-auto"/>, title: "Expert Tutors", desc: "Learn from industry experts." },
            { icon: <FaBook className="text-5xl mb-4 mx-auto"/>, title: "Interactive Courses", desc: "Hands-on learning for all levels." },
            { icon: "🎯", title: "Goal Oriented", desc: "Track your progress efficiently." }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              className="p-6 rounded-lg shadow-lg bg-base-100  text-center cursor-pointer"
              whileHover={{ y: -10, scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              {feat.icon}
              <h3 className="font-bold text-xl mb-2 ">{feat.title}</h3>
              <p className="">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
 
        </div>
    );
};

export default FesureSection;