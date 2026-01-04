import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSequre from '../Hook/UseAxiosSequre';
import { FaRegTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';


const ManageProfiles = () => {
  const axiosSequre = UseAxiosSequre()
  const { data: user = [],refetch } = useQuery({
    queryKey: ['Manageprofiles'],
    queryFn: async () => {

      const res = await axiosSequre.get('/userProfile')

      return res.data.result

    }

  })

  const handleDelete = async(id) => {
    console.log('id', id)

    const res = await axiosSequre.delete(`/userProfile/${id}`)
     console.log(res.data)
    if (res.data.deletedCount) {
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  console.log('user', user)
  return (
    <>
      <div className="overflow-x-auto mt-10 bg-base-200 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm text-left ">

          {/* TABLE HEADER */}
          <thead className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-800 text-xs uppercase tracking-wider text-gray-300 border-b border-b-blue-200 ">
            <tr>
              <th className="px-6 py-4">Profile</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Experience</th>
              <th className="px-6 py-4 text-center">Partners</th>
              <th className="px-6 py-4 text-center">Rating</th>
              <th className="px-6 py-4 text-center">action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="divide-y divide-blue-200">
            {user.map((user, index) => (
              <tr
                key={user._id}
                className={`
            transition
            ${index % 2 === 0
                    ? 'bg-base-100'
                    : 'bg-base-300'}
             hover:bg-gray-300 hover:text-gray-700
          `}
              >
                {/* PROFILE */}
                <td className="px-6 py-4">
                  <img
                    src={user.profileimage}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-600"
                  />
                </td>

                {/* NAME */}
                <td className="px-6 py-4 font-medium ">
                  {user.name}
                </td>

                {/* EMAIL */}
                <td className="px-6 py-4">
                  <span className="block max-w-[220px] truncate">
                    {user.email}
                  </span>
                </td>

                {/* LOCATION */}
                <td className="px-6 py-4">{user.location}</td>

                {/* SUBJECT */}
                <td className="px-6 py-4">{user.subject}</td>

                {/* EXPERIENCE */}
                <td className="px-6 py-4">{user.experienceLevel}</td>

                {/* PARTNERS */}
                <td className="px-6 py-4 text-center font-semibold">
                  {user.patnerCount}
                </td>

                {/* RATING */}
                <td className="px-6 py-4 text-center font-medium">
                  {user.rating || 0} ⭐
                </td>
                <td className="px-6 py-4 text-center font-medium">
                  <button onClick={() => handleDelete(user._id)} className='bg-red-400 btn shadow-md'><FaRegTrashCan /> delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default ManageProfiles;