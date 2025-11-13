import { useContext, useRef, useState } from 'react';
import AuthContex from '../Contex/AuthContex';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
import { useLocation, useNavigate, Link } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
  const { googleLoginandRegister, signInuser } = useContext(AuthContex);
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  const userLogin = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    signInuser(Email, Password)
      .then(res=> {
        console.log(res)
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

  const googleLoginHandle = () => {
    googleLoginandRegister()
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-6">
      <div className="flex flex-col  lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">
        {/* Left side: Image or illustration */}
       <div className=" lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex-col items-center justify-center p-10 space-y-6">
  <h2 className="text-5xl text-center font-extrabold">Welcome Back!</h2>
  <p className="text-lg text-center text-white/90 text-center">Login to continue learning and connecting with your study partners.</p>
  <div className='flex justify-center'>
    <Link
    to="/register"
    className="mt-4 inline-block mx-auto bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
  >
    Register
  </Link>
  </div>
</div>


        {/* Right side: Form */}
        <div className="w-full lg:w-1/2 p-10">
          <form onSubmit={userLogin} className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center lg:hidden">Welcome Back!</h1>
            <p className="text-center text-gray-500 lg:hidden">Login to continue learning and connecting.</p>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-11 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye size={22} /> : <IoIosEyeOff size={22} />}
              </button>
            </div>

            

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Login
            </button>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>- Or -</span>
            </div>

            <button
              type="button"
              onClick={googleLoginHandle}
              className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition-colors font-medium"
            >
              <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
