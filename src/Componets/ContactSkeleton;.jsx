import React from "react";

const ContactSkeleton = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center animate-pulse">

        {/* Heading Skeleton */}
        <div className="h-12 w-72 bg-base-300 rounded mb-4"></div>
        <div className="h-5 w-[600px] bg-base-300 rounded mb-16"></div>

        {/* Contact Info Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 w-full mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-base-200 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 bg-base-300 rounded-full"></div>
              <div className="h-5 w-24 bg-base-300 rounded"></div>
              <div className="h-4 w-40 bg-base-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Contact Form Skeleton */}
        <div className="w-full md:w-2/3 bg-base-200 p-10 rounded-2xl shadow-lg flex flex-col gap-6">
          <div className="h-12 w-full bg-base-300 rounded-lg"></div>
          <div className="h-12 w-full bg-base-300 rounded-lg"></div>
          <div className="h-40 w-full bg-base-300 rounded-lg"></div>
          <div className="h-12 w-40 bg-base-300 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default ContactSkeleton;
