import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import AuthContex from '../Contex/AuthContex';
import Loading from './Loading';
import { FaTrashAlt, FaEdit, FaUserGraduate } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const MyConnections = () => {
  const { user, loading } = useContext(AuthContex);
  const [requestUser, setRequestUser] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const updateRef = useRef();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if(!user?.email) return
    axios(`https://studymate-api-server-pi.vercel.app/myConnection?email=${user?.email}`)
      .then((res) => setRequestUser(res.data))
      .catch((error) => console.log(error));
  }, [user, refresh]);
 console.log(requestUser)
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://studymate-api-server-pi.vercel.app/myConnection/${id}`)
            .then(() => setRefresh(!refresh))
            .catch((error) => console.log(error));

          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const handleUpdateBtn = (data) => {
    setDataUpdate(data);
    updateRef.current.showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileimage = e.target.profileImge.value;
    const subject = e.target.subject.value;
    const studyMode = dataUpdate.studyMode;

    const { _id, ...rest } = dataUpdate;
    const updateInfo = {
      ...rest,
      name,
      profileimage,
      subject,
      studyMode,
    };

    axios
      .patch(`https://studymate-api-server-pi.vercel.app/myConnection/${_id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setRefresh(!refresh);
          updateRef.current.close();
        }
      })
      .catch((err) => {
        console.log("Patch error:", err.response?.data || err.message);
        Swal.fire("Error", "Update failed! Check console for details.", "error");
      });
  };

  const subjectHandle = (e) => {
    setDataUpdate({ ...dataUpdate, subject: e.target.value });
  };

  const studyModeHandle = (mode) => {
    setDataUpdate({ ...dataUpdate, studyMode: mode });
  };

  if (!loading) return <Loading />;

  return (
    <div className="px-4 md:px-16 py-10  dark:text-gray-100 transition-colors duration-500">
      <title>MyConnection</title>
      <h1 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
        <FaUserGraduate className="text-indigo-500" />
        <span className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          My Connections
        </span>
      </h1>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
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
            {requestUser.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500 dark:text-gray-300">
                  No connections found.
                </td>
              </tr>
            ) : (
              <AnimatePresence>
                {requestUser?.map((data) => (
                  <motion.tr
                    key={data?._id}
                    className="hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={data?.profileimage}
                              alt={data?.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="font-semibold text-gray-700 dark:text-gray-200">{data?.name}</td>
                    <td className="dark:text-gray-200">{data?.subject}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          data.studyMode === 'Online'
                            ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100'
                        }`}
                      >
                        {data?.studyMode}
                      </span>
                    </td>

                    <td className="flex gap-2">
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="btn btn-error btn-sm text-white flex items-center gap-1"
                      >
                        <FaTrashAlt /> Delete
                      </button>
                      <button
                        onClick={() => handleUpdateBtn(data)}
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
          {requestUser.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300 w-full">No connections found.</p>
          ) : (
            requestUser.map((data) => (
              <motion.div
                key={data._id}
                className="bg-white dark:bg-gray-800 p-5 shadow-md rounded-xl border dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={data?.profileimage}
                    alt={data?.name}
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{data?.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{data?.subject}</p>
                  </div>
                </div>

                <p className="text-sm mb-2">
                  <strong>Study Mode:</strong>{' '}
                  <span
                    className={`btn ${
                      data.studyMode === 'Online'
                        ? 'text-green-600 dark:text-green-100'
                        : 'text-orange-600 dark:text-orange-100'
                    } font-medium`}
                  >
                    {data?.studyMode}
                  </span>
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-error btn-sm flex items-center gap-1 text-white"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                  <button
                    onClick={() => handleUpdateBtn(data)}
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
          className="modal modal-bottom sm:modal-middle "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="modal-box">
            <h3 className="font-bold text-2xl text-center mb-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-transparent bg-clip-text ">
              Update Partner Info
            </h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
                  name="name"
                  defaultValue={dataUpdate?.name}
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
                  name="profileImge"
                  defaultValue={dataUpdate?.profileimage}
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
                      className={`btn  flex-1 ${
                        dataUpdate.studyMode === mode
                          ? ' bg-gradient-to-br from-indigo-500 to-purple-600 '
                          : 'btn-outline  bg-purple-300  text-gray-700'
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
                  onClick={() => updateRef.current.close()}
                  type="button"
                  className="btn"
                >
                  Close
                </button>
                <button type="submit" className="btn bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
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
