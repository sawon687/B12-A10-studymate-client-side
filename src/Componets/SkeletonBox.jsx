import React from "react";
import { motion } from "framer-motion"; // ← Make sure this is imported
import ProfileLoading from "./ProfileLoading";

// Reusable Skeleton Box
const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse ${className}`}></div>
);

const HomeSkeleton = () => {
  const skeletons = Array(3).fill(0); // for testimonials

  return (
    <div className="space-y-32 px-4 max-w-[1370px] mx-auto">

      {/* Hero Skeleton */}
      <div className="relative top-15 w-[90%] mx-auto mt-10 rounded-2xl p-[1px] 
      bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 shadow-emerald-400 hover:shadow-lg
      backdrop-blur-3xl overflow-hidden animate-pulse"
    >
      {/* Single Slide Skeleton */}
      <div
        className="h-[500px] rounded-2xl relative bg-gray-300 dark:bg-gray-700 overflow-hidden"
      >
        {/* Gradient Overlay Skeleton */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

        {/* Content Skeleton */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 px-6">
          {/* Title */}
          <div className="h-12 w-3/4 rounded-xl bg-gray-400 dark:bg-gray-600"></div>

          {/* Description */}
          <div className="h-6 w-2/3 rounded-lg bg-gray-400 dark:bg-gray-600"></div>
          <div className="h-6 w-2/3 rounded-lg bg-gray-400 dark:bg-gray-600"></div>

          {/* Button */}
          <div className="h-12 w-40 rounded-lg bg-gray-500 dark:bg-gray-700 mt-4"></div>
        </div>

        {/* Animated shimmer blur */}
        <div className="absolute inset-0 bg-white/10 blur-xl animate-pulse-slow rounded-2xl"></div>
      </div>
    </div>

      {/* Highlights Skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <SkeletonBox key={i} className="h-40 w-full rounded-3xl" />
        ))}
      </section>

      {/* Categories Skeleton */}
      <section>
        <SkeletonBox className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <SkeletonBox key={i} className="h-52 rounded-3xl" />
          ))}
        </div>
      </section>

      {/* Features Skeleton */}
      <section>
        <SkeletonBox className="h-10 w-56 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <SkeletonBox key={i} className="h-48 rounded-2xl" />
          ))}
        </div>
      </section>

      {/* Top Study Partners Skeleton */}
      <section>
        <SkeletonBox className="h-10 w-72 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
             <ProfileLoading key={i}></ProfileLoading>
          ))}
        </div>
      </section>

      {/* How It Works Skeleton */}
      <section>
        <SkeletonBox className="h-10 w-64 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <SkeletonBox key={i} className="h-56 rounded-2xl" />
          ))}
        </div>
      </section>

      {/* Testimonials Skeleton */}
      <div className="relative max-w-[1370px] mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500 py-20">
        <section className="max-w-[1370px] bg-white/10 shadow-lg gradient-border backdrop-blur-2xl py-10 rounded-2xl mx-auto animate-pulse">
          {/* Header Skeleton */}
          <div className="text-center mb-14 relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-25 -left-40 w-96 h-96 rounded-full bg-green-300 opacity-30 animate-pulse-slow"></div>
              <div className="absolute -bottom-20 -right-22 w-96 h-96 rounded-full bg-cyan-300 opacity-30 animate-pulse-slow delay-2000"></div>
            </div>

            <div className="h-12 md:h-14 w-3/4 mx-auto rounded-xl bg-gray-200 dark:bg-gray-700 mb-4"></div>
            <div className="h-4 w-2/5 mx-auto rounded-lg bg-gray-200 dark:bg-gray-600"></div>
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
            {skeletons.map((_, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl p-6 dark:bg-gray-900/70 
                  backdrop-blur-xl shadow-xl border border-gray-200 dark:border-gray-800 transition-all"
              >
                {/* Gradient Glow Placeholder */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-600/10 blur-xl"></div>

                <div className="relative z-10 space-y-4">
                  {/* Text Placeholder */}
                  <div className="h-16 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>

                  {/* User Info Placeholder */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600"></div>
                    <div className="flex flex-col gap-2">
                      <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-3 w-16 rounded-md bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter Skeleton */}
      <section
        className="relative w-[90%] mb-15 shadow-md rounded-2xl mx-auto overflow-hidden py-28
        bg-gradient-to-r from-gray-300 to-gray-400
        dark:from-gray-800 dark:to-gray-700
        transition-colors duration-500 animate-pulse"
      >
        {/* Background fake blobs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gray-400/40"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gray-500/40"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center space-y-8 z-10">

          {/* Heading Skeleton */}
          <div className="h-14 md:h-16 w-3/4 mx-auto rounded-xl bg-gray-200 dark:bg-gray-600"></div>

          {/* Subtext Skeleton */}
          <div className="h-6 w-2/3 mx-auto rounded-lg bg-gray-200 dark:bg-gray-600"></div>

          {/* Input + Button Skeleton */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            {/* Input */}
            <div className="h-12 w-full md:w-96 rounded-xl bg-gray-200 dark:bg-gray-600"></div>

            {/* Button */}
            <div className="h-12 w-40 rounded-xl bg-gray-300 dark:bg-gray-500"></div>
          </div>

          {/* Small note Skeleton */}
          <div className="h-4 w-1/3 mx-auto rounded-md bg-gray-200 dark:bg-gray-600 mt-4"></div>
        </div>
      </section>

    </div>
  );
};

export default HomeSkeleton;
