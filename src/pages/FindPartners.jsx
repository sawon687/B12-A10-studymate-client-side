import axios from 'axios';
import ProfileCards from '../Componets/ProfileCards';
import { FaSearch } from 'react-icons/fa';
import Loading from './Loading';
import AuthContex from '../Contex/AuthContex';
import { useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";

const FindPartners = () => {
  const { loading } = useContext(AuthContex);
  const [Profile, setProfile] = useState([]);
  const [active, setActive] = useState("");
  const [titleText, SetTitleText] = useState("");

  // Typewriter effect
  const fullText = 'Welcome to StudyMate';
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      SetTitleText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Fetch initial data
  useEffect(() => {
    setActive("Default");
    axios('https://studymate-api-server-pi.vercel.app/userProfile')
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  }, []);

  // Search function
  const handleSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.searchitem.value;
    axios(`https://studymate-api-server-pi.vercel.app/search?search=${searchItem}`)
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  };

  // Sort function
  const handleSortByExperience = (level) => {
    setActive(level); // set active button
    axios(`https://studymate-api-server-pi.vercel.app/userProfile?experienceSort=${level}`)
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  };

  // Default button
  const handleDefault = () => {
    setActive("Default");
    axios("https://studymate-api-server-pi.vercel.app/userProfile")
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
    <title>FindPartner</title>
  
    <div className='max-w-[1200px] mx-auto px-4'>
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-10 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {titleText}
        </h1>
        <h3 className="text-xl md:text-2xl mt-2 ">
          Find Your Perfect Study Partner
        </h3>
      </motion.div>

      {/* Sort Buttons & Search */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pb-10'>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Beginner" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={() => handleSortByExperience("Beginner")}
          >
            Beginner First
          </button>
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Intermediate" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={() => handleSortByExperience("Intermediate")}
          >
            Intermediate First
          </button>
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Expert" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={() => handleSortByExperience("Expert")}
          >
            Expert First
          </button>
          <button
            className={`btn px-6 py-2 rounded-full ${active === "Default" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-base-100"}`}
            onClick={handleDefault}
          >
            Default
          </button>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className='mt-4 md:mt-0'>
          <div className="relative flex items-center">
            <input
              type="search"
              name="searchitem"
              placeholder="Search"
              className="input w-[250px] md:w-[300px] rounded-l-full border border-gray-300 outline-none px-4 py-2"
            />
            <button
              type="submit"
              className="btn rounded-r-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>

      {/* Profile Cards */}
      <div>
           <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-12"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
        Explore All Profiles
      </h1>
      <p className="mt-4 text-gray-500 text-lg">
        Total Profiles Available: <span className="font-semibold text-indigo-600">{Profile.length}</span>
      </p>
    </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
        {Profile.length > 0 ? (
          Profile.map((data) => (
            <ProfileCards data={data} key={data._id} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center min-h-[50vh]">
            <h1 className="text-center font-bold text-4xl text-gray-700">
              No Result Found
            </h1>
          </div>
        )}
      </div>
      </div>
    </div>
      </>
  );
};

export default FindPartners;
