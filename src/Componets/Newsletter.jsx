import React from 'react';
import { motion } from "framer-motion";
const Newsletter = () => {
    return (
        <div>
            <section className="relative w-[90%] mb-15 shadow-md rounded-2xl mx-auto overflow-hidden py-28 bg-gradient-to-r from-green-400 to-cyan-500 dark:from-gray-900 dark:to-gray-700 text-white transition-colors duration-500">
  {/* Optional: animated background circles */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-300 opacity-30 animate-pulse-slow"></div>
    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-300 opacity-30 animate-pulse-slow delay-2000"></div>
  </div>

  <div className="relative container mx-auto px-4 text-center space-y-6 z-10">
    {/* Animated Gradient Heading */}
    <motion.h2
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 animate-gradient-x"
    >
      Subscribe to Our Newsletter
    </motion.h2>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 dark:text-gray-300"
    >
      Get the latest updates, news, and exclusive offers directly in your inbox. Stay ahead with us!
    </motion.p>

    {/* Input + Button */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
      {/* Email Input */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-96 px-5 py-3 rounded-xl border border-white/30 dark:border-gray-600 bg-white/20 dark:bg-gray-800/50 placeholder-white/80 dark:placeholder-gray-400 text-white focus:outline-none focus:ring-4 focus:ring-cyan-400 dark:focus:ring-green-400 transition-all duration-300"
      />

      {/* Subscribe Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 font-extrabold text-white shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        Subscribe
      </motion.button>
    </div>

    {/* Small note */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="text-sm md:text-base text-gray-200 dark:text-gray-400 mt-4"
    >
      We respect your privacy. Unsubscribe at any time.
    </motion.p>
  </div>
</section>
        </div>
    );
};

export default Newsletter;