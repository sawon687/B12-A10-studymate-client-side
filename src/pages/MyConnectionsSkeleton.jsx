import { motion } from "framer-motion";

const SkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      {/* Profile */}
      <td>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </td>

      {/* Name */}
      <td>
        <div className="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Subject */}
      <td>
        <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Study Mode */}
      <td>
        <div className="h-6 w-20 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Actions */}
      <td>
        <div className="flex gap-2">
          <div className="h-8 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-8 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </td>
    </tr>
  );
};

const MyConnectionsSkeleton = () => {
  return (
    <div className="hidden md:block w-7xl overflow-x-auto shadow-lg rounded-2xl border dark:border-gray-800 bg-base-300">
      <table className="table w-full">
        <thead className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-lg">
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Study Mode</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {[...Array(5)].map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyConnectionsSkeleton;
