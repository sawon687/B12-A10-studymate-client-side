import React, { useState, useContext } from 'react';
import AuthContex from '../Contex/AuthContex';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import GoogleLogin from '../Componets/GoogleLogin';
import { useForm } from 'react-hook-form';
import UseAxiosSequre from '../Hook/UseAxiosSequre';

const Register = () => {
  const { createUser, updateUsers } = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
  const [showPassword, setShowPassword] = useState(false);
  const axiosSecure=UseAxiosSequre()
const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm()
  const handleRegister = (data) => {
  const profileImage = data.photo[0];

  // 🔥 Firebase create user
  createUser(data.email, data.password)
    .then(() => {
      const formData = new FormData();
      formData.append('image', profileImage);

      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGE_API_KEY}`;

      // 🔥 Image upload
      return axiosSecure.post(imageApiUrl, formData);
    })
    .then((res) => {
      const photoURL = res.data.data.url;

      // 🔥 Firebase profile update
      return updateUsers({
        displayName: data.name,
        photoURL,
      }).then(() => photoURL);
    })
    .then((photoURL) => {
      const userInfo = {
        name: data.name,
        email: data.email,
        photo: photoURL,
      };

      // 🔥 Save user to DB
      return axiosSecure.post('/user', userInfo);
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Account created successfully!',
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.error('REGISTER ERROR:', error);

      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message, // 🔥 Firebase / Axios error দেখাবে
      });
    });
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
          <form onSubmit={handleSubmit(handleRegister)}>
            <h1 className="text-2xl font-bold text-center mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Create Your Account!</h1>
            <h3 className="text-center text-gray-500 mb-6">Join StudyMate and find the perfect study partner.</h3>

            <label className="label">Name</label>
            <input required type="text" {...register('name',{ required: 'Name is required' })} className="input mb-2 input-bordered w-full" placeholder="User Name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            <label className="label">Email</label>
            <input required type="email" {...register('email',{ required: 'Email is required' })} className="input mb-2 input-bordered w-full" placeholder="Email" />
           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              {/* Photo */}
          <div>
            <input
              type="file"
              {...register('photo', { required: 'Photo is required' })}
              className="file-input w-full rounded"
            />
            {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>}
          </div>


            <label className="label">Password</label>
            <div className="relative mb-4">
              <input type={showPassword ? "text" : "password"}    {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'At least 6 characters' },
                validate: {
                  hasCapital: (value) => /[A-Z]/.test(value) || '1 capital letter',
                  hasNumber: (value) => /\d/.test(value) || '1 number',
                  hasSpecial: (value) => /[\W_]/.test(value) || '1 special character',
                },
              })} className="input w-full input-bordered" placeholder="Password" />
              <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
              </button>
            </div> 
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

            <motion.button 
              type="submit" 
              className="btn border-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-3"
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
            <p className="text-center my-3 text-gray-400">- Or -</p>

            <GoogleLogin></GoogleLogin>
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
