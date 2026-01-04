import React from "react";
import { FaStar, FaRegStar, FaBook, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../Componets/HeroSection";
import FesureSection from "../Componets/FesureSection";
import TopstudyPartners from "../Componets/TopstudyPartners";
import Testimonials from "../Componets/Testimonials";

const Home = () => {
  return (
    <div className="space-y-32 transition-colors duration-500">

      {/* 1️⃣ Hero Section with Animated Text */}
    <HeroSection></HeroSection>

   <FesureSection></FesureSection>

    <TopstudyPartners></TopstudyPartners>

      {/* 4️⃣ How it Works with staggered animation */}
      <section className="bg-base-100 max-w-[1370px] shadow-2xl rounded-2xl mx-auto py-20 transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
          {["Sign Up", "Choose Course", "Start Learning"].map((step, i) => (
            <motion.div 
              key={i} 
              className="p-6 rounded-lg shadow bg-base-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i*0.2, duration: 0.5 }}
            >
              <div className="text-4xl mb-2 font-bold ">{i+1}</div>
              <h3 className="font-bold mb-2  ">{step}</h3>
              <p className="">Lorem ipsum dolor sit amet.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5️⃣ Testimonials with scroll animation */}
  
      <Testimonials></Testimonials>
      {/* 6️⃣ CTA / Newsletter with interactive input */}
      <section className="bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-gray-900 dark:to-gray-700 text-white py-20 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="text-3xl font-bold">Subscribe to Newsletter</h2>
          <p>Get latest updates and offers directly in your inbox.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full md:w-1/3 focus:ring-2 focus:ring-white transition duration-300"/>
            <motion.button whileHover={{ scale: 1.1 }} className="btn btn-primary">Subscribe</motion.button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
