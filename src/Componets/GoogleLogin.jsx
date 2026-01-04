import React, { useContext } from 'react';
import AuthContex from '../Contex/AuthContex';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router';
const GoogleLogin = () => {
      const {  googleLoginandRegister} = useContext(AuthContex);
      const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';
     const googleLoginHandle = () => {
        googleLoginandRegister()
          .then(res => {
            Swal.fire({ title: "Login successfully!", icon: "success" });
            navigate(from);
          })
          .catch(error => Swal.fire({ title: `${error.message}`, icon: "error" }));
      };
    
    return (
        <>
           <motion.button 
              type="button" 
              onClick={googleLoginHandle} 
              className="btn w-full text-black btn-outline flex items-center justify-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Login with Google
            </motion.button> 
        </>
    );
};

export default GoogleLogin;