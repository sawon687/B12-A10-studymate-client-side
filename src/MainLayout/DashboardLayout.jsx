import {
  LayoutDashboard,

  FileText,
  ShieldCheck,
  Users,
  Settings,
  Menu,
} from "lucide-react";
import { FaUserFriends, FaUserPlus} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import { Link, NavLink, Outlet } from "react-router";
import DarkToggle from "../Componets/DarkToggle";
import SidebarItem from "../Componets/Sidebaritem";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= Main Content ================= */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="navbar fixed     z-50  bg-base-100 shadow px-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <Menu />
            </label>
          </div>
          <div className="flex w-[1200px] justify-between  items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
             <div className="avatar gap-2">
              <DarkToggle></DarkToggle>
              <div className="w-9 rounded-full">
                <img src="https://i.pravatar.cc/100" />
              </div>
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
          <div className="bg-base-100 rounded-xl shadow p-6">
            <div className="skeleton h-64 w-full rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* ================= Sidebar ================= */}
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col">
          {/* Logo */}
          <div className="px-6 py-4 text-2xl font-bold border-b border-purple-500">
            <Link to='/'>StudyMate</Link>
          </div>

          {/* Menu */}
          <ul className="menu p-4 text-sm flex-1 space-y-4">
        
             
            <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active  />
          <SidebarItem to='/Dashboard/createPartnerProfile'  icon={<FaUserPlus size={18} />} text="CreateProfile" badge="2" />
               <SidebarItem to='/Dashboard/myConnection' icon={<FaUserFriends size={18} />} text="MyConnections" badge="2" />
            <SidebarItem to='/Dashboard/manageProfiles' icon={<MdManageAccounts size={18} />} text="Manage Profiles" />
            <SidebarItem icon={<ShieldCheck size={18} />} text="Explainability" />
            <SidebarItem icon={<Users size={18} />} text="User Management" />
            <SidebarItem icon={<Settings size={18} />} text="Settings" />
          </ul>


          {/* Footer */}
          <div className="p-4 border-t border-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://i.pravatar.cc/100"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Caspian Jude</p>
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
