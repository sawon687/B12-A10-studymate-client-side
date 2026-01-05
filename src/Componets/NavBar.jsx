import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import AuthContex from "../Contex/AuthContex";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, User, LogOut, LayoutDashboard } from "lucide-react";
import DarkToggle from "./DarkToggle";

const NavBar = () => {
  const { user, signoutUser } = useContext(AuthContex);
  const [toggle, setToggle] = useState(false);

  const userSignout = () => {
    signoutUser()
      .then(() => console.log("User signed out"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-gray-100 transition-all duration-200 flex items-center ${
              isActive
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "hover:text-indigo-500 dark:hover:text-indigo-400"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/FindPartners"
          className={({ isActive }) =>
            `font-semibold text-gray-100 transition-all duration-200 flex items-center ${
              isActive
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "hover:text-indigo-500 dark:hover:text-indigo-400"
            }`
          }
        >
          Find Partners
        </NavLink>
      </li>

        <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `font-semibold text-gray-100 transition-all duration-200 flex items-center ${
              isActive
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "hover:text-indigo-500 dark:hover:text-indigo-400"
            }`
          }
        >
          Blog
        </NavLink>
      </li>

       <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-semibold text-gray-100 transition-all duration-200 flex items-center ${
              isActive
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "hover:text-indigo-500 dark:hover:text-indigo-400"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative top-0  overflow-hidden">
      {/* Navbar */}
      <div className="navbar w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-gray-900/60 shadow-md transition-all duration-500 px-4 lg:px-20 py-3">
        <div className="navbar-start rounded-2xl ">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content mt-2 p-4 w-52 bg-white dark:bg-gray-900 rounded-xl shadow-xl flex flex-col gap-2"
            >
              {links}
              {!user && (
                <>
                  <Link className="btn btn-outline btn-primary" to="/Login">
                    Login
                  </Link>
                  <Link
                    className="btn bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                    to="/Register"
                  >
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center rounded-xl shadow-lg transform transition-all hover:scale-105">
              <FaBookOpen className="text-white text-2xl" />
            </div>
            <span className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl">
              StudyMate
            </span>
          </Link>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          <DarkToggle />

          {user ? (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-indigo-500"
              />
              {/* Profile Dropdown */}
              <AnimatePresence>
                {toggle && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setToggle(false)}
                      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute right-0 top-14 w-60 flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 p-4 gap-2 border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
                    >
                      <Link
                        to="/Profile"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900 dark:hover:to-purple-900 transition-all duration-200"
                        onClick={() => setToggle(false)}
                      >
                        <User className="text-indigo-500" size={18} /> Profile
                      </Link>
                      <Link
                        to="/Dashboard"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900 dark:hover:to-purple-900 transition-all duration-200"
                        onClick={() => setToggle(false)}
                      >
                        <LayoutDashboard className="text-indigo-500" size={18} /> Dashboard
                      </Link>
                      <button
                        onClick={userSignout}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 dark:hover:from-red-900 dark:hover:to-pink-900 transition-all duration-200"
                      >
                        <LogOut className="text-red-500" size={18} /> Log Out
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <>
              <Link
                to="/Login"
                className="btn btn-outline btn-primary hidden md:block"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="btn bg-gradient-to-br from-indigo-500 to-purple-600 text-white hidden md:block"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
