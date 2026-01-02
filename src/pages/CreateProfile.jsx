import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import AuthContex from '../Contex/AuthContex';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateProfile = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [studyMode, setStudyMode] = useState('');
  const [experienceLevel, setExperience] = useState('');
  const [subject, setSubject] = useState('');
  const { user } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const profileimage = e.target.photoURL.value;
    const availabilityTime = e.target.availabilityTime.value;
    const patnerCount = Number(e.target.partnercount.value);
    const location = e.target.location.value;

    const profileCreate = {
      name,
      profileimage,
      subject,
      studyMode,
      availabilityTime,
      location,
      experienceLevel,
      rating,
      patnerCount,
      email,
    };

    axios
      .post('https://studymate-api-server-pi.vercel.app/createProfile', profileCreate)
      .then(() => {
        Swal.fire({
          title: '✅ Profile Created Successfully!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error Creating Profile!',
          text: err.message,
          icon: 'error',
          confirmButtonColor: '#d33',
        });
      });
  };

  return (
    <> 
    <title>Create Profile</title> 
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl border border-blue-100 p-8 sm:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-br from-indigo-500 to-purple-600  bg-clip-text text-transparent mb-2">
          Create Your StudyMate Profile
        </h1>
        <p className="text-center  mb-8">
          Connect, collaborate, and learn smarter together 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label-text font-semibold">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="label-text font-semibold">Email</label>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered w-full  cursor-not-allowed"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="label-text font-semibold">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              defaultValue={user?.photoURL}
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Study Mode */}
          <div>
            <label className="label-text font-semibold">Study Mode</label>
      
                  <div className="flex flex-wrap gap-3 mt-2">
              {['Online', 'Offline'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                 
                  onClick={() => setStudyMode(mode)}
                  className={`px-4 py-2 rounded-lg font-medium border flex-1 transition-all ${
                    studyMode === mode
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600  hover:bg-gradient-to-br from-indigo-500 to-purple-600 text-white   shadow'
                      : ' border-gray-300 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          
            </div>
         

          {/* Availability & Partner Count */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label-text font-semibold">
                Availability Time
              </label>
              <input
                type="text"
                name="availabilityTime"
                placeholder="Evening 6–9 PM"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="label-text font-semibold">Partner Count</label>
              <input
                type="number"
                name="partnercount"
                defaultValue={0}
                min={0}
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="label-text font-semibold">Experience Level</label>
            <div className="flex flex-wrap gap-3 mt-2">
              {['Beginner', 'Intermediate', 'Expert'].map((level) => (
                <button
                  key={level}
                  type="button"
                 
                  onClick={() => setExperience(level)}
                  className={`px-4 py-2 rounded-lg font-medium border flex-1 transition-all ${
                    experienceLevel === level
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600  hover:bg-gradient-to-br from-indigo-500 to-purple-600 text-white   shadow'
                      : ' border-gray-300 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="label-text font-semibold">Rating</label>
            <div className="flex gap-2 py-2 justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  size={28}
                  className="cursor-pointer transition-transform hover:scale-110"
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(null)}
                  color={value <= (hover || rating) ? '#facc15' : '#d1d5db'}
                />
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="label-text font-semibold">Location</label>
            <input
              type="text"
              name="location"
              required
              placeholder="City, area, or preferred location"
              className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="label-text font-semibold">Subject</label>
            <select
              onChange={(e) => setSubject(e.target.value)}
              className="select select-bordered w-full focus:ring-2 focus:ring-blue-400"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a subject
              </option>
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

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn border-0 bg-gradient-to-br from-indigo-500 to-purple-600  hover:bg-blue-700 text-white w-full text-lg font-semibold transition-all shadow-md"
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
    </> 
  );
};

export default CreateProfile;
