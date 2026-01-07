import {
  LayoutDashboard,
  Menu,
} from "lucide-react";
import { FaBookOpen, FaUserFriends, FaUserPlus} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import { Link, NavLink, Outlet, useNavigate } from "react-router";
import DarkToggle from "../Componets/DarkToggle";
import { useContext, useEffect } from "react";
import AuthContex from "../Contex/AuthContex";
import Loading from "../pages/Loading";
import ProfileDropdown from "../Componets/profileDropdown";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSequre from "../Hook/UseAxiosSequre";
import SidebarItem from "../Componets/Sidebaritem";
;
const DashboardLayout = () => {
   const { user, loading } = useContext(AuthContex);
  
  const navigate = useNavigate();
    const axiosSecure = UseAxiosSequre();

  const { data: createUser, isLoading } = useQuery({
    queryKey: ["createProfileData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userProfile/${user?.email}`);
      return res.data;
    }
  });

  useEffect(() => {
    if (!isLoading && !createUser) {
      navigate("/Dashboard/createPartnerProfile");
    }
  }, [isLoading, createUser, navigate])
 const showprofile=true;
   if(loading)
   {
     return <Loading></Loading>
   }
  return (
    <div className="drawer lg:drawer-open min-h-screen ">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= Main Content ================= */}
      <div className="drawer-content  flex flex-col">
        {/* Top Navbar */}
        <div className="navbar fixed  backdrop-blur-lg    z-50  bg-white/10 shadow px-4">
          <div className="flex-none  lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <Menu />
            </label>
          </div>
          <div className="flex w-[1200px] relative justify-between  items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-2 relative z-[999]">
  <DarkToggle />
  {user && <ProfileDropdown showprofile={showprofile} />}
</div>

          </div>
          
        </div>

        {/* Page Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Cards */}

      

          <div className=" flex justify-center mt-10 items- w-full">
           <Outlet></Outlet>
          </div>

          {/* Large Section */}
          
        </div>
      </div>

      {/* ================= Sidebar ================= */}
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col">
          {/* Logo */}
          <div className="px-6 py-4 text-2xl font-bold border-b border-purple-500">
            <Link className="flex items-center  gap-2" to='/'><div className="w-12  h-12 bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center rounded-xl shadow-lg transform transition-all hover:scale-105">
                          <FaBookOpen className="text-white text-2xl" />
                        </div> <span>StudyMate</span></Link>
          </div>

          {/* Menu */}
          <ul className="menu p-4 text-sm flex-1 space-y-4">
        
             
            <SidebarItem to='/Dashboard/DashboardOverview' icon={<LayoutDashboard size={18} />} text="Dashboard"  active  />
          <SidebarItem to='/Dashboard/createPartnerProfile'  icon={<FaUserPlus size={18} />} text="CreateProfile" badge="2" />
               <SidebarItem to='/Dashboard/myConnection' icon={<FaUserFriends size={18} />} text="MyConnections" badge="2" />
            <SidebarItem to='/Dashboard/manageProfiles' icon={<MdManageAccounts size={18} />} text="Manage Profiles" />
            
          </ul>


          {/* Footer */}
          <div className="p-4 border-t border-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{user.displayName}</p>
                <p className="text-xs opacity-80">825 Tokens Left</p>
              </div>
            </div>
            <button className="btn btn-warning btn-sm w-full">
              Get Tokens
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};





export default DashboardLayout;
