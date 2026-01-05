import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import AuthContex from "../Contex/AuthContex";
import UseAxiosSequre from "../Hook/UseAxiosSequre";

import ProfileCards from "../Componets/ProfileCards";
import ProfileLoading from "../Componets/ProfileLoading";
import Loading from "./Loading";

const FindPartners = () => {
  const { loading: authLoading } = useContext(AuthContex);
  const axiosSequre = UseAxiosSequre();

  const [profiles, setProfiles] = useState([]);
  const [active, setActive] = useState("Default");
  const [titleText, setTitleText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [experience, setExperience] = useState("");
  const [profileCount, setProfileCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadingProfiles, setLoadingProfiles] = useState(false);

  const limit = 8;
  const skip = currentPage * limit;
  const totalPage = Math.ceil(profileCount / limit);

  // Typewriter effect for heading
  useEffect(() => {
    const fullText = "Find Your Perfect Study Partner";
    let index = 0;
    const interval = setInterval(() => {
      setTitleText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Fetch profiles
  useEffect(() => {
    const fetchProfiles = async () => {
      setLoadingProfiles(true);
      try {
        const res = await axiosSequre.get(
          `/userProfile?limit=${limit}&skip=${skip}&search=${searchText}&experienceSort=${experience}`
        );
        setProfiles(res.data.result || []);
        setProfileCount(res.data.Totalcount || 0);
      } catch (error) {
        console.error(error);
        setProfiles([]);
        setProfileCount(0);
      } finally {
        setLoadingProfiles(false);
      }
    };
    fetchProfiles();
  }, [searchText, experience, currentPage]);

  // Handle search
  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.searchitem.value);
    setCurrentPage(0);
  };

  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loading />
      </div>
    );
  }

  return (
    <section className="py-16  transition-colors">
      <div className="max-w-[1370px] mx-auto  flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl pt-15 font-extrabold text-center bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          {titleText}
        </motion.h2>
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
          Browse and connect with students who match your learning style and goals
        </p>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["Beginner", "Intermediate", "Expert"].map((level) => (
              <button
                key={level}
                onClick={() => {
                  setExperience(level);
                  setActive(level);
                  setCurrentPage(0);
                }}
                className={`btn rounded-full px-6 py-2 text-sm md:text-base transition-all duration-300 ${
                  active === level
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-md"
                }`}
              >
                {level}
              </button>
            ))}
            <button
              onClick={() => {
                setExperience("");
                setActive("Default");
                setCurrentPage(0);
              }}
              className={`btn rounded-full px-6 py-2 text-sm md:text-base transition-all duration-300 ${
                active === "Default"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-md"
              }`}
            >
              Default
            </button>
          </div>

          <form onSubmit={handleSearchText} className="flex w-full md:w-auto justify-center">
            <input
              type="search"
              name="searchitem"
              placeholder="Search profiles..."
              className="input input-bordered rounded-l-full w-[240px] dark:bg-gray-800 dark:text-gray-200"
            />
            <button className="btn rounded-r-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition-transform">
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Profiles Grid */}
        {loadingProfiles ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full bg-base-300  rounded-2xl shadow-md">
            {Array.from({ length: limit }).map((_, i) => (
              <ProfileLoading key={i} />
            ))}
          </div>
        ) : profiles.length > 0 ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 w-full bg-base-300  p-8 rounded-2xl shadow-md transition-all">
            {profiles.map((profile) => (
              <ProfileCards key={profile._id} data={profile} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-500 dark:text-gray-400">
              No Result Found
            </h1>
          </div>
        )}

        {/* Pagination */}
        {totalPage > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            {currentPage > 0 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="btn btn-outline rounded-full"
              >
                Prev
              </button>
            )}
            {[...Array(totalPage).keys()].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`btn rounded-full px-4 ${
                  i === currentPage
                    ? "bg-gradient-to-r from-green-400 to-cyan-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-md"
                }`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPage - 1 && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="btn btn-outline rounded-full"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FindPartners;
