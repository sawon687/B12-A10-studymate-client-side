import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import AuthContex from "../Contex/AuthContex";
import {  useContext, useState } from "react";



const NavBar = () => {
  const {user,signoutUser}=useContext(AuthContex)
  const [toggle,setToggle]=useState(false)
  const userSignout=()=>{
     console.log('click')
     signoutUser().then(res=>{
      console.log(res)

     }).catch(error=>{
       console.log(error)
     })
  }
  console.log(user?.photoURL)
    const links=<>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/FindPartners'>Find Partners</NavLink></li>
          {
            user && <>
            <li><NavLink to='/createPartnerProfile'>Create Partner Profile </NavLink></li>
          <li><NavLink to='/myConnection'>MyConnection</NavLink></li>
          <li><NavLink to='/Register'></NavLink></li>
            </>
          }
        </>
        console.log(user)
    return (
        
        <div className=" relative">
            <div className="navbar px-20 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-[#2563EB]"> <div className="w-12 h-12 bg-[#2563EB] flex justify-center items-center rounded-xl"><FaBookOpen className="text-white text-2xl " /></div><span className="text-gray-800 font-bold">StudyMate</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    {
      user?<> <figure onClick={()=> setToggle(!toggle)}><img  className="w-14 h-14 rounded-full" src={user?.photoURL} alt="" /></figure> </>:<> <Link to='/Login' className="btn">Login</Link>
    <Link to='/Register' className="btn">Register</Link></>
    }
    
  </div>
 
</div>
 <div onClick={()=>setToggle(!toggle)} className={`w-50 h-20 ${toggle? 'block':'hidden'} flex flex-col card bg-base-100 card-xs shadow-sm  absolute left-6/7 `}>
  <NavLink className='btn border-[#2563EB] text-[#2563EB] mb-2 font-semibold text-xl'>Profile</NavLink>
  <button type="button" onClick={userSignout} className="btn border-[#2563EB] text-[#2563EB]">Log Out</button>
       
  </div>
        </div>
    );
};

export default NavBar;