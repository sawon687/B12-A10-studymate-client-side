import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import AuthContex from '../Contex/AuthContex';
import Loading from './Loading';
import { FaTrashAlt, FaEdit, FaUserGraduate } from 'react-icons/fa';

const MyConnections = () => {
  const { user, loading } = useContext(AuthContex);
  const [requstUser, setRequstUser] = useState([]);
  const [dataupdate, setDataUpdate] = useState({});
  const updateRef = useRef();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios(`http://localhost:9000/myConnection?email=${user?.email}`)
      .then((res) => setRequstUser(res.data))
      .catch((error) => console.log(error));
  }, [user, refresh]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9000/myConnection/${id}`)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((error) => console.log(error));
  };

  const handleupdatebtn = (data) => {
    setDataUpdate(data);
    updateRef.current.showModal();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileimage = e.target.profileImge.value;
    const subject = e.target.subject.value;

    const updateInfo = {
      name,
      profileimage,
      subject,
      studyMode: dataupdate?.studyMode,
      availabilityTime: dataupdate?.availabilityTime,
      location: dataupdate.location,
      experienceLevel: dataupdate.experienceLevel,
      rating: dataupdate.rating,
      patnerCount: dataupdate.patnerCount,
      email: dataupdate.email,
      request_Email: dataupdate.request_Email,
      partnerId: dataupdate.partnerId,
    };

    axios
      .patch(`http://localhost:9000/myConnection/${dataupdate._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setRefresh(!refresh);
          updateRef.current.close();
          e.target.reset();
        }
      });
  };

  const subjectHandle = (e) => {
    setDataUpdate({ ...dataupdate, subject: e.target.value });
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className="px-4 md:px-16 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2 text-blue-600">
        <FaUserGraduate /> My Connections
      </h1>

      {/* ✅ Desktop Table View */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white">
        <table className="table w-full">
          <thead className="bg-blue-600 text-white text-lg">
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Study Mode</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {requstUser.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No connections found.
                </td>
              </tr>
            ) : (
              requstUser.map((data) => (
                <tr
                  key={data?._id}
                  className="hover:bg-blue-50 transition-all duration-300"
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

                  <td className="font-semibold text-gray-700">{data?.name}</td>
                  <td>{data?.subject}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        data.studyMode === 'Online'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
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
                      onClick={() => handleupdatebtn(data)}
                      className="btn btn-info btn-sm text-white flex items-center gap-1"
                    >
                      <FaEdit /> Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile & Tablet Card View */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {requstUser.length === 0 ? (
          <p className="text-center text-gray-500 w-full">No connections found.</p>
        ) : (
          requstUser.map((data) => (
            <div
              key={data._id}
              className="bg-white p-5 shadow-md rounded-xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={data?.profileimage}
                  alt={data?.name}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {data?.name}
                  </h3>
                  <p className="text-sm text-gray-500">{data?.subject}</p>
                </div>
              </div>

              <p className="text-sm mb-2">
                <strong>Study Mode:</strong>{' '}
                <span
                  className={`${
                    data.studyMode === 'Online'
                      ? 'text-green-600'
                      : 'text-orange-600'
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
                  onClick={() => handleupdatebtn(data)}
                  className="btn btn-info btn-sm flex items-center gap-1 text-white"
                >
                  <FaEdit /> Update
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Update Modal */}
      <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-center mb-3 text-blue-600">
            Update Partner Info
          </h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="name"
                defaultValue={dataupdate?.name}
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="profileImge"
                defaultValue={dataupdate?.profileimage}
              />
            </div>

            <div>
              <label className="label">Study Mode</label>
              <div className="flex gap-4">
                {['Online', 'Offline'].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() =>
                      setDataUpdate({ ...dataupdate, studyMode: mode })
                    }
                    className={`btn flex-1 ${
                      dataupdate.studyMode === mode
                        ? 'btn-primary text-white'
                        : 'btn-outline'
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
                value={dataupdate.subject || ''}
                onChange={subjectHandle}
                className="select select-bordered w-full"
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
              <button type="submit" className="btn btn-primary text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyConnections;
