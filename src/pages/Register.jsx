import React, { useState, useContext } from 'react';
import AuthContex from '../Contex/AuthContex';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Register = () => {
  const { createUser, googleLoginandRegister, updateUsers } = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const PhotoURl = e.target.photoURL.value;
    const Password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(Password)) {
      return Swal.fire({
        title: '❌ Password must have: At least 1 uppercase, 1 lowercase, and 6+ chars',
        icon: "error",
      });
    }

    createUser(Email, Password)
      .then(res => {
        updateUsers({ displayName: Name, photoURL: PhotoURl });
        Swal.fire({ title: "User registered successfully!", icon: "success" });
        navigate(from);
      })
      .catch(error => Swal.fire({ title: `${error.message}`, icon: "error" }));
  };

  const googleLoginHandle = () => {
    googleLoginandRegister()
      .then(res => {
        Swal.fire({ title: "User registered successfully!", icon: "success" });
        navigate(from);
      })
      .catch(error => Swal.fire({ title: `${error.message}`, icon: "error" }));
  };

  return (
    <div className="hero  min-h-screen flex items-center justify-center p-4">
       <title>Register</title>
      <motion.div 
        className="card w-full max-w-4xl  bg-white shadow-2xl flex flex-col md:flex-row rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Column: Form */}
        <motion.div 
          className="card-body w-full md:w-1/2 bg-white p-10"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <form onSubmit={handleRegister}>
            <h1 className="text-2xl font-bold text-center mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Create Your Account!</h1>
            <h3 className="text-center text-gray-500 mb-6">Join StudyMate and find the perfect study partner.</h3>

            <label className="label">Name</label>
            <input required type="text" name="name" className="input mb-2 input-bordered w-full" placeholder="User Name" />

            <label className="label">Email</label>
            <input required type="email" name="email" className="input mb-2 input-bordered w-full" placeholder="Email" />

            <label className="label">Photo URL</label>
            <input required type="text" name="photoURL" className="input mb-2 input-bordered w-full" placeholder="Photo URL" />

            <label className="label">Password</label>
            <div className="relative mb-4">
              <input type={showPassword ? "text" : "password"} name="password" className="input w-full input-bordered" placeholder="Password" />
              <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
              </button>
            </div>

            <motion.button 
              type="submit" 
              className="btn border-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-3"
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
            <p className="text-center my-3 text-gray-400">- Or -</p>

            <motion.button 
              type="button" 
              onClick={googleLoginHandle} 
              className="btn w-full text-black btn-outline flex items-center justify-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Register with Google
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column: Login Info / Welcome */}
        <motion.div 
          className="w-full md:w-1/2 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex flex-col items-center justify-center p-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center mb-6">Already have an account? Click the button below to login.</p>
          <motion.button 
            onClick={() => navigate('/Login')} 
            className="btn btn-outline  btn-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Login
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Register;
