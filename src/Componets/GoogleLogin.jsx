import React, { useContext } from 'react';
import AuthContex from '../Contex/AuthContex';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router';
import UseAxiosSequre from '../Hook/UseAxiosSequre';
const GoogleLogin = () => {
      const {  googleLoginAndRegister} = useContext(AuthContex);
      const location = useLocation();
      const axiosSecure=UseAxiosSequre()
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
      const handlegoogleLogin = (e) => {
         e.preventDefault()
           googleLoginAndRegister().then(res => {
                 navigate(from,{replace:true})
                const user=res.user;
                 const userInfo={
                     name:user.displayName,
                     email:user.email,
                     photo:user.photoURL
                 }
                  axiosSecure.post('/user',userInfo).then(res => {
                                     console.log(res.data)
                                     if (res.data.insertedId) {
                                
                                         Swal.fire({
                                             position: "center",
                                             icon: "success",
                                             title: "Your ar created your account successfully",
                                             showConfirmButton: false,
                                             timer: 1500
                                         });
                                     }
                 
                                 })
                             }).catch(error=>console.log('error',error))
      };
    
    return (
        <>
           <motion.button 
              type="button" 
              onClick={handlegoogleLogin} 
              className="btn w-full text-black bg-white border-none shadow-lg btn-outline flex items-center justify-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Login with Google
            </motion.button> 
        </>
    );
};

export default GoogleLogin;