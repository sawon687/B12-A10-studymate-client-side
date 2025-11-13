import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import AuthContex from "../Contex/AuthContex";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { user, signoutUser } = useContext(AuthContex);
  const [toggle, setToggle] = useState(false);

  const userSignout = () => {
    signoutUser()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold"
              : "text-gray-800 dark:text-white font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/FindPartners"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold"
              : "text-gray-800 dark:text-white font-semibold"
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
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-800 dark:text-white font-semibold"
              }
            >
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myConnection"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-800 dark:text-white font-semibold"
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
      <div className="navbar lg:px-20 bg-white dark:bg-gray-900 shadow-md">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white"
          >
            <div className="w-12 h-12 bg-indigo-600 flex justify-center items-center rounded-xl">
              <FaBookOpen className="text-white text-2xl" />
            </div>
            StudyMate
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {user ? (
            <motion.figure
              onClick={() => setToggle(!toggle)}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <img
                className="w-14 h-14 rounded-full border-2 border-indigo-500"
                src={user?.photoURL}
                alt="Profile"
              />
            </motion.figure>
          ) : (
            <>
              <Link to="/Login" className="btn btn-outline btn-primary">
                Login
              </Link>
              <Link
                to="/Register"
                className="btn bg-gradient-to-br from-indigo-500 to-purple-600  text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Profile Dropdown with Backdrop */}
      <AnimatePresence>
        {toggle && user && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
              className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
            ></motion.div>

            {/* Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-6 top-20 w-56 flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 p-4 gap-3"
            >
              <Link
                to="/Profile"
                className="btn btn-outline btn-primary w-full text-left font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700"
                onClick={() => setToggle(false)}
              >
                Profile
              </Link>
              <button
                type="button"
                onClick={userSignout}
                className="btn btn-outline btn-primary w-full hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                Log Out
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
