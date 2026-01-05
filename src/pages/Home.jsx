import React from "react";
import { FaStar, FaRegStar, FaBook, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../Componets/HeroSection";
import FesureSection from "../Componets/FesureSection";
import TopstudyPartners from "../Componets/TopstudyPartners";
import Testimonials from "../Componets/Testimonials";
import Newsletter from "../Componets/Newsletter";
import Highlights from "./Highlights";


const Home = () => {
  return (
    <div className="space-y-32 transition-colors duration-500">

      {/* 1️⃣ Hero Section with Animated Text */}
    <HeroSection></HeroSection>
    <Highlights></Highlights>
   <FesureSection></FesureSection>

    <TopstudyPartners></TopstudyPartners>

      {/* 4️⃣ How it Works with staggered animation */}
      <section className="relative max-w-[1370px] mx-auto py-24 px-4">
  {/* Background glow */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl"></div>

  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 
  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    How It Works
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { title: "Sign Up", desc: "Create your account in a few seconds." },
      { title: "Choose Course", desc: "Pick the best course that fits you." },
      { title: "Start Learning", desc: "Begin your journey and level up." },
    ].map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        whileHover={{ y: -10, scale: 1.03 }}
        className="group relative rounded-2xl p-[1px] 
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg shadow-emerald-200"
      >
        <div className="rounded-2xl p-8 h-full bg-base-100 dark:bg-base-300 
        backdrop-blur-xl shadow-xl transition-all duration-300">

          {/* Step number badge */}
          <div className="w-12 h-12 mb-6 flex items-center justify-center 
          rounded-full font-bold text-white 
          bg-gradient-to-r from-indigo-500 to-purple-600 
          group-hover:scale-110 transition">
            {i + 1}
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-500 transition">
            {step.title}
          </h3>

          <p className="text-base-content/70 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* 5️⃣ Testimonials with scroll animation */}
  
      <Testimonials></Testimonials>
  {/* 6️⃣ Modern CTA / Newsletter Section */}
      <Newsletter></Newsletter>



    </div>
  )
}

export default Home;
