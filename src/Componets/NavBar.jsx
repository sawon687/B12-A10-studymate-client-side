import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import AuthContex from "../Contex/AuthContex";
import { useContext } from "react";
import DarkToggle from "./DarkToggle";
import ProfileDropdown from "./profileDropdown";
import Loading from "../pages/Loading";

const NavBar = () => {
  const { user ,loading} = useContext(AuthContex); // ✅ Capital U
  
 

if(loading)
{
   return <Loading></Loading>
}

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
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `font-semibold text-gray-100 transition-all duration-200 flex items-center ${
              isActive
                ? "text-indigo-500 border-b-2 border-indigo-500"
                : "hover:text-indigo-500 dark:hover:text-indigo-400"
            }`
          }
        >
          Service
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex  fixed top-0 left-0 righ-0  z-[999]  justify-center w-full  ">
      {/* Navbar */}
      <div className="navbar relative   backdrop-blur-lg bg-gray-900/60 shadow-md transition-all duration-500 px-4 lg:px-20 py-3">
        <div className="navbar-start rounded-2xl">
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

          {user?<ProfileDropdown></ProfileDropdown>  : (
            <>
              <Link
                to="/Login"
                className="btn btn-outline py-2 btn-primary hidden md:block"
              >
                Login
              </Link>
              <Link
                to="/Register"
                className="btn bg-gradient-to-br py-2 from-indigo-500 to-purple-600 text-white hidden md:block"
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
