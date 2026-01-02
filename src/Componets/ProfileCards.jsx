import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProfileCards = ({ data }) => {
  const { _id, profileimage, name, subject, rating } = data;

  return (
    <div className="flex justify-center">
      {/* Card Container */}
      <div className="group relative w-80 sm:w-96 bg-base-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        
        {/* Profile Image */}
        <div className="flex justify-center mt-6">
          <div className="w-28 h-28 rounded-full border-4 border-yellow-400 dark:border-indigo-500 overflow-hidden shadow-md transform group-hover:scale-105 transition-transform duration-300">
            <img
              src={profileimage}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="px-6 py-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{name}</h2>
          <p className="text-yellow-500 dark:text-indigo-400 font-medium mb-4">{subject}</p>

          {/* Rating */}
          <div className="flex justify-center items-center gap-2 mb-5">
            <span className="flex items-center gap-1 text-yellow-400 dark:text-indigo-400 font-semibold text-lg">
              {rating?.toFixed(1) || rating} <FaStar />
            </span>
          </div>

          {/* View Profile Button */}
          <Link
            to={`/PartnerDetails/${_id}`}
            className="inline-block w-full py-2.5 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-indigo-500 dark:to-purple-600 text-white shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
