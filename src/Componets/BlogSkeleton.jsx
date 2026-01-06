import React from "react";

const BlogSkeleton = () => {
 

  
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center animate-pulse">

        {/* Heading Skeleton */}
        <div className="h-12 w-72 bg-base-300 rounded mb-4"></div>
        <div className="h-5 w-[500px] bg-base-300 rounded mb-12"></div>

        {/* Category Buttons Skeleton */}
        <div className="flex gap-4 mb-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-10 w-24 bg-base-300 rounded-full"
            ></div>
          ))}
        </div>

        {/* Blog Cards Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-base-200 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image Skeleton */}
              <div className="h-48 w-full bg-base-300"></div>

              {/* Content Skeleton */}
              <div className="p-6 space-y-4">
                <div className="h-4 w-24 bg-base-300 rounded"></div>
                <div className="h-6 w-full bg-base-300 rounded"></div>
                <div className="h-4 w-full bg-base-300 rounded"></div>
                <div className="h-4 w-5/6 bg-base-300 rounded"></div>
                <div className="h-10 w-32 bg-base-300 rounded-full mt-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Skeleton */}
        <div className="mt-20 w-full h-48 bg-base-300 rounded-2xl"></div>
      </div>
    </section>
  );
};

export default BlogSkeleton;
