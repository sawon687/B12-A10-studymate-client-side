const TableSkeletonRow = () => {
  return (
    <tr className="animate-pulse">
      {/* Profile */}
      <td className="px-6 py-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Name */}
      <td className="px-6 py-4">
        <div className="h-4 w-28 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Email */}
      <td className="px-6 py-4">
        <div className="h-4 w-40 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Location */}
      <td className="px-6 py-4">
        <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Subject */}
      <td className="px-6 py-4">
        <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Experience */}
      <td className="px-6 py-4">
        <div className="h-4 w-28 rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Partners */}
      <td className="px-6 py-4 text-center">
        <div className="h-4 w-10 mx-auto rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Rating */}
      <td className="px-6 py-4 text-center">
        <div className="h-4 w-12 mx-auto rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>

      {/* Action */}
      <td className="px-6 py-4 text-center">
        <div className="h-8 w-20 mx-auto rounded bg-gray-300 dark:bg-gray-700"></div>
      </td>
    </tr>
  );
};

const UsersTableSkeleton = () => {
  return (
    <div className="overflow-x-auto mt-10 bg-base-200 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm text-left">
        {/* Header */}
        <thead className="sticky top-0 bg-gray-100 dark:bg-gray-800 text-xs uppercase tracking-wider text-gray-300 border-b border-b-blue-200">
          <tr>
            {[
              "Profile",
              "Name",
              "Email",
              "Location",
              "Subject",
              "Experience",
              "Partners",
              "Rating",
              "Action",
            ].map((h) => (
              <th key={h} className="px-6 py-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Skeleton rows */}
        <tbody className="divide-y divide-blue-200">
          {[...Array(6)].map((_, i) => (
            <TableSkeletonRow key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTableSkeleton;
