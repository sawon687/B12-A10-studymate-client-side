import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import AuthContex from "../Contex/AuthContex";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, User, LogOut } from "lucide-react";

const NavBar = () => {
  const { user, signoutUser } = useContext(AuthContex);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // ✅ Dark/Light theme toggle setup
  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

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
            `font-semibold transition-colors duration-200  flex justify-center items-center ${
              isActive
                ? "text-indigo-500"
                : " hover:text-indigo-600 dark:hover:text-indigo-400"
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
            `font-semibold transition-colors flex justify-center items-cente duration-200 ${
              isActive
                ? "text-indigo-500"
                : " hover:text-indigo-600 dark:hover:text-indigo-400"
            }`
          }
        >
          Find Partners
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/createPartnerProfile"
              className={({ isActive }) =>
                `font-semibold transition-colors duration-200  ${
                  isActive
                    ? "text-indigo-500"
                    : " hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              }
            >
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myConnection"
              className={({ isActive }) =>
                `font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-500"
                    : " hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              }
            >
              MyConnection
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="relative">
      {/* 🔹 Navbar Main  section*/}
      <div className="navbar  fixed z-50 top-0  backdrop-blur-lg    lg:px-20 px-4  shadow-md transition-colors duration-500">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost   lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu bg-gray-100 mt-5 border-2 border-gray-400 menu-sm md:hidden space-y-2 text-center dropdown-content  rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              {links}
              <Link
                to="/Login"
                className="btn btn-outline btn-primary"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="pt-2 btn  bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
              >
                Register
              </Link>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold "
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center rounded-xl">
              <FaBookOpen className="text-white text-2xl" />
            </div>
            <span className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              StudyMate
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-ghost btn-circle"
          >
            {theme === "dark" ? (
              <Moon className="text-indigo-600" size={22} />
             
            ) : (
               <Sun className="text-yellow-400" size={22} />
            )}
          </button>

          {/* User Section */}
          {user ? (
            <motion.figure
              onClick={() => setToggle(!toggle)}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <img
                className="w-12 h-12 rounded-full border-2 border-indigo-500"
                src={user?.photoURL}
                alt="Profile"
              />
            </motion.figure>
          ) : (
            <>
              <Link
                to="/Login"
                className="btn btn-outline btn-primary"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="pt-2 btn hidden md:block bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* 🔹 Profile Dropdown */}
      <AnimatePresence>
        {toggle && user && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="absolute right-6 top-20 w-60 flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 p-4 gap-3 border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
            >
              <Link
                to="/Profile"
                className="flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900 dark:hover:to-purple-900 transition-all duration-200"
                onClick={() => setToggle(false)}
              >
                <User className="text-indigo-500" size={18} /> Profile
              </Link>

              <button
                type="button"
                onClick={userSignout}
                className="flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 dark:hover:from-red-900 dark:hover:to-pink-900 transition-all duration-200"
              >
                <LogOut className="text-red-500" size={18} /> Log Out
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
