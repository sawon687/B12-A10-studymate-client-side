import React, { use, useState } from 'react';
import AuthContex from '../Contex/AuthContex';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const Register = () => {
  const { createUser, googleLoginandRegister, updateUsers } = use(AuthContex)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location?.state?.from?.pathname)
  const from = location?.state?.from?.pathname || '/'
  const [showPassword, setShowPassword] = useState(false)
  const handleRegister = (e) => {
    e.preventDefault()
    console.log('click handle register')
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const PhotoURl = e.target.photoURL.value;
    const Password = e.target.password.value;
    const userInformation = {
      Name,
      Email,
      PhotoURl,

    }

    console.log(userInformation)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(Password)) {
      return Swal.fire({
        title: '❌ Password must have: \n• At least 1 uppercase letter\n• At least 1 lowercase letter\n• Minimum 6 characters',
        icon: "success",
        draggable: true
      })

    }
    createUser(Email, Password).then(res => {
      updateUsers({ displayName: Name, photoURL: PhotoURl })

      console.log(res)


      Swal.fire({
        title: "User Registers successfully!",
        icon: "success",
        draggable: true
      });
      navigate(from)
    }).catch(error => {
      console.log(error)
      Swal.fire({
        title: `${error.message}`,
        icon: "success",
        draggable: true
      });
    })



  }
  const googleLoginHandle = () => {
    console.log('click')

    googleLoginandRegister().then(res => {
      console.log(res)
      Swal.fire({
        title: "User Registers successfully!",
        icon: "success",
        draggable: true
      });
      navigate(from)
    }
    ).catch(error => {
      console.log(error)
      Swal.fire({
        title: `${error.message}`,
        icon: "success",
        draggable: true
      })
    })
  }
  const handlepasswordTogle = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>


              <fieldset className="fieldset">
                <h1 className='text-2xl font-bold text-center'>Create Your Account! Register</h1>
                <h3 className='text-center text-sm text-gray-600'>Join StudyMate and start learning with the right partner.</h3>
                {/* name */}
                <label className="label">Name</label>
                <input required type="text" className="input" placeholder="User Name" name='name' />
                {/* Email */}
                <label className="label">Email</label>
                <input type="Email" className="input" placeholder="Email" name='email' />

                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input required type="text" className="input" placeholder="PhotoURL" name='photoURL' />

                {/* password */}
                <div className=' relative'>
                  <label className="label">Password</label>
                  <input type={`${showPassword ? 'text' : 'password'}`} className="input" placeholder="Password" name='password' />
                  <button type='button' className=' absolute right-6 top-7' onClick={(e) => handlepasswordTogle(e)}>{showPassword ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}</button>
                </div>
                <div><a className="link link-hover">Forgot password?</a></div>
                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p className='text-center font-bold text-gray-800 text-[15px]'>-Or-</p>
                {/* Google */}
                <button onClick={googleLoginHandle} type='button' className="btn bg-white text-black border-[#e5e5e5]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;