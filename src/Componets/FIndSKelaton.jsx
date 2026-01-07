import React from "react";
import ProfileLoading from "./ProfileLoading";

const SkeletonBox = ({ className }) => (
  <div
    className={`bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse ${className}`}
  ></div>
);

const FindSkeleton = () => {
  return (
    <div className="w-full mt-20 flex justify-center items-center">
      <div className="w-full max-w-[1370px] mx-auto space-y-10 py-10">
        
        {/* Heading Skeleton */}
        <SkeletonBox className="h-14 md:h-16 w-full md:w-2/3 mx-auto rounded-xl" />

        {/* Search + Filter Skeleton */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full">
          {/* Search Input */}
          <SkeletonBox className="h-12 w-full md:w-96 rounded-xl" />
          {/* Filter Button */}
          <SkeletonBox className="h-12 w-36 rounded-xl" />
        </div>

        {/* Section Title Skeleton */}
        <SkeletonBox className="h-10 w-1/3 mx-auto mt-10 rounded-xl" />

        {/* Partners Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
          {[...Array(8)].map((_, i) => (
            <ProfileLoading key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSkeleton;
