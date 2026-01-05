import React, { useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const allBlogPosts = [
    {
      title: "Top 10 Gadgets of 2026",
      desc: "Discover the most popular and innovative gadgets you must have this year.",
      img: "https://i.postimg.cc/7h0pJvPL/gadget.jpg",
      date: "Jan 5, 2026",
      category: "Gadgets",
    },
    {
      title: "How to Choose the Perfect Laptop",
      desc: "A complete guide for choosing the right laptop for your needs and budget.",
      img: "https://i.postimg.cc/fbChXb1r/laptop.jpg",
      date: "Jan 3, 2026",
      category: "Tech Guide",
    },
    {
      title: "Sustainable Shopping Tips",
      desc: "Learn how to shop smart and eco-friendly while staying trendy.",
      img: "https://i.postimg.cc/3R6yfZqq/sustainable.jpg",
      date: "Dec 28, 2025",
      category: "Eco Tips",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(allBlogPosts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-20  transition-colors">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl pb-4 font-extrabold text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6"
        >
          Our Blog
        </motion.h1>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-12 max-w-2xl">
          Stay updated with the latest trends, tips, and insights from SuduDay Mate.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="bg-base-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl relative group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bas via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                <span className="absolute top-3 left-3 px-3 py-1 bg-indigo-500 text-white rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <span className="text-sm ">{post.date}</span>
                <h2 className="text-xl font-semibold ">
                  {post.title}
                </h2>
                <p className="">{post.desc}</p>
                <button className="mt-4 self-start px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 flex flex-col md:flex-row justify-between items-center text-white shadow-lg"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to explore our products?
            </h2>
            <p className="mt-2 text-lg md:text-xl">
              Join thousands of happy customers shopping at SuduDay Mate.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full bg-white text-indigo-600 font-bold hover:scale-105 hover:shadow-lg transition-transform animate-pulse">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
