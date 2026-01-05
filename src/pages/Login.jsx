import React, { useState, useContext } from 'react';
import AuthContex from '../Contex/AuthContex';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
import { useLocation, useNavigate, Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import GoogleLogin from '../Componets/GoogleLogin';

const Login = () => {
  const {  signInuser } = useContext(AuthContex);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const userLogin = (e) => {


    
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    signInuser(Email, Password)
      .then(res => {
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from);
      })
      .catch(error => {
        Swal.fire({
          title: "Login failed",
          text: error.message,
          icon: "error",
        });
      });
  };

 
  return (
    <>
    <title>Create Profile</title> 
    <div className="flex items-center justify-center min-h-screen ">
      <motion.div
        className="flex flex-col my-30 lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left side: Welcome Info */}
        <motion.div
          className="lg:w-1/2 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex flex-col items-center justify-center p-10 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-center">Welcome Back!</h2>
          <p className="text-lg text-center text-white/90">Login to continue learning and connecting with your study partners.</p>
          <Link
            to="/register"
            className="mt-4 inline-block bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Register
          </Link>
        </motion.div>

        {/* Right side: Form */}
        <motion.div
          className="lg:w-1/2 w-full p-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={userLogin} className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center lg:hidden">Welcome Back!</h1>
            <p className="text-center text-gray-500 lg:hidden">Login to continue learning and connecting.</p>

            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border input border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />

            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                className="w-full input border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye size={22} /> : <IoIosEyeOff size={22} />}
              </button>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg"
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>- Or -</span>
            </div>

           <GoogleLogin></GoogleLogin>
          </form>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Login;
