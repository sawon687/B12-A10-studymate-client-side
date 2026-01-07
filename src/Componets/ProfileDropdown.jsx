import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContex from "../Contex/AuthContex";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LayoutDashboard, LogOut, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSequre from "../Hook/UseAxiosSequre";


const ProfileDropdown = ({showprofile}) => {
  const { user, signOutUser } = useContext(AuthContex);
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
 
  const userSignout = () => {
    signOutUser()
      .then(() => {
        setToggle(false);
        navigate("/Login");
      })
      .catch(console.log);
  };



  return (
    <div className="relative">
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="relative cursor-pointer  transition z-[100]"
        onClick={() => setToggle(!toggle)}
      >
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-indigo-500"
        />

        <AnimatePresence>
          {toggle && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggle(false)}
                className="fixed inset-0 bg-black z-[900]"
              />

              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 top-12 w-60 z-[999]
                flex flex-col bg-base-300
                rounded-2xl shadow-2xl p-4 gap-2"
              >

                    {
                        showprofile && <><Link
                  to="/Profile"
                  onClick={() => setToggle(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                  hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-white"
                >
                  <Home size={18} /> Home
                </Link></>
                    }
                <Link
                  to="/Profile"
                  onClick={() => setToggle(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                  hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-white"
                >
                  <User size={18} /> Profile
                </Link>

                <Link
                  to="/Dashboard"
                  onClick={() => setToggle(false)}
                  className="flex items-center  gap-2 px-4 py-2 rounded-lg
                hover:bg-indigo-900 hover:text-white"
                >
                  <LayoutDashboard size={18} /> Dashboard
                </Link>

                <button
                  onClick={userSignout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                  hover:bg-red-100 dark:hover:bg-red-900 hover:text-white"
                >
                  <LogOut size={18} /> Log Out
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProfileDropdown;
