import React from 'react';

const ProfileLoading = () => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="relative bg-base-300 rounded-lg shadow overflow-hidden animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>

          {/* Content Skeleton */}
          <div className="p-4 space-y-3">
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="flex items-center justify-between mt-4">
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileLoading;
