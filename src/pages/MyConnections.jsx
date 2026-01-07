import { useContext, useRef, useState } from 'react';
import { FaTrashAlt, FaEdit, FaUserGraduate } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import UseAxiosSequre from '../Hook/UseAxiosSequre';
import AuthContex from '../Contex/AuthContex';
import { useQuery } from '@tanstack/react-query';
import MyConnectionsSkeleton from './MyConnectionsSkeleton';

const MyConnections = () => {
  const { user } = useContext(AuthContex);
  const axiosSecure = UseAxiosSequre();
  const updateRef = useRef();

  const [dataUpdate, setDataUpdate] = useState({});

  // Fetch connections
  const { data = [], refetch, isLoading } = useQuery({
    queryKey: ['my-connection', user?.email],
    enabled: !!user?.email, // only fetch if user email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/myConnection?email=${user.email}`);
      return res.data;
    },
  });

  // Delete connection
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/myConnection/${id}`)
            .then(() => refetch())
            .catch((err) => console.log(err));

          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Connection has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your connection is safe :)',
            'error'
          );
        }
      });
  };

  // Open update modal
  const handleUpdateBtn = (item) => {
    setDataUpdate(item);
    updateRef.current.showModal();
  };

  // Update connection
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileImages = e.target.profileImge.value;
    const subject = e.target.subject.value;
    const studyMode = dataUpdate.studyMode;

    const { _id, ...rest } = dataUpdate;
    const updateInfo = { ...rest, name, profileImages, subject, studyMode };

    axiosSecure
      .patch(`/myConnection/${_id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          updateRef.current.close();
        }
      })
      .catch((err) => {
        console.log('Patch error:', err.response?.data || err.message);
        Swal.fire('Error', 'Update failed! Check console.', 'error');
      });
  };

  const subjectHandle = (e) => {
    setDataUpdate({ ...dataUpdate, subject: e.target.value });
  };

  const studyModeHandle = (mode) => {
    setDataUpdate({ ...dataUpdate, studyMode: mode });
  };

  if (isLoading) return <MyConnectionsSkeleton />;

  return (
    <div className="py-10 w-full max-w-7xl mx-auto transition-colors duration-500">
      <title>MyConnections</title>

      <h1 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
        <FaUserGraduate className="text-indigo-500" />
        <span className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          My Connections
        </span>
      </h1>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-2xl border dark:border-gray-800 bg-base-300">
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
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  No connections found.
                </td>
              </tr>
            ) : (
              <AnimatePresence>
                {data.map((item) => (
                  <motion.tr
                    key={item._id}
                    className=" transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item?.profileImages}
                              alt={item?.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{item?.name}</td>
                    <td>{item?.subject}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.studyMode === 'Online'
                            ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100'
                        }`}
                      >
                        {item.studyMode}
                      </span>
                    </td>

                    <td className="flex gap-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-error btn-sm text-white flex items-center gap-1"
                      >
                        <FaTrashAlt /> Delete
                      </button>
                      <button
                        onClick={() => handleUpdateBtn(item)}
                        className="btn btn-sm text-white bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center gap-1"
                      >
                        <FaEdit /> Update
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence>
          {data.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300 w-full">
              No connections found.
            </p>
          ) : (
            data.map((item) => (
              <motion.div
                key={item._id}
                className="bg-white dark:bg-gray-800 p-5 shadow-md rounded-xl border dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={item?.profileImages}
                    alt={item?.name}
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {item?.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{item?.subject}</p>
                  </div>
                </div>

                <p className="text-sm mb-2">
                  <strong>Study Mode:</strong>{' '}
                  <span
                    className={`text-sm font-medium ${
                      item.studyMode === 'Online'
                        ? 'text-green-600 dark:text-green-100'
                        : 'text-orange-600 dark:text-orange-100'
                    }`}
                  >
                    {item?.studyMode}
                  </span>
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-error btn-sm flex items-center gap-1 text-white"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                  <button
                    onClick={() => handleUpdateBtn(item)}
                    className="btn btn-info btn-sm flex items-center gap-1 text-white"
                  >
                    <FaEdit /> Update
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Update Modal */}
      <AnimatePresence>
        <motion.dialog
          ref={updateRef}
          className="modal modal-bottom sm:modal-middle"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="modal-box">
            <h3 className="font-bold text-2xl text-center mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Update Partner Info
            </h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={dataUpdate?.name}
                  className="input input-bordered w-full "
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="profileImge"
                  defaultValue={dataUpdate?.profileImages || ''}
                  className="input input-bordered w-full "
                />
              </div>

              <div>
                <label className="label">Study Mode</label>
                <div className="flex gap-4">
                  {['Online', 'Offline'].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => studyModeHandle(mode)}
                      className={`btn flex-1 ${
                        dataUpdate.studyMode === mode
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                          : 'btn-outline bg-purple-300 text-gray-700'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label">Subject</label>
                <select
                  name="subject"
                  value={dataUpdate.subject || ''}
                  onChange={subjectHandle}
                  className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="Bangla">Bangla</option>
                  <option value="Math">Math</option>
                  <option value="Programming">Programming</option>
                  <option value="History">History</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                  <option value="ICT">ICT</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => updateRef.current.close()}
                  className="btn"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </motion.dialog>
      </AnimatePresence>
    </div>
  );
};

export default MyConnections;
