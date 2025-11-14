import React, { useContext } from 'react';
import AuthContex from '../Contex/AuthContex';

const Profile = () => {
  const { user } = useContext(AuthContex);
  

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
         <title>Profile</title>
      <div className="w-80 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 gap-4">
        
        {/* Profile Image */}
        <div className="relative">
          <img
            className="w-24 h-24 rounded-full object-cover ring-4 ring-indigo-500 shadow-lg"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-800">{user?.displayName}</h1>
        <h3 className="text-gray-600 text-sm">{user?.email}</h3>

        {/* Optional Action Buttons */}
        {/* <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Edit Profile
        </button> */}

      </div>
    </div>
  );
};

export default Profile;
