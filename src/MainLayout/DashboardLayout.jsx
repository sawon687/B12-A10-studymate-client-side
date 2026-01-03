import {
  LayoutDashboard,
  Cpu,
  FileText,
  ShieldCheck,
  Users,
  Settings,
  Menu,
} from "lucide-react";
import { FaUserFriends } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= Main Content ================= */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="navbar fixed z-50  bg-base-100 shadow px-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <Menu />
            </label>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div className="flex-none">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img src="https://i.pravatar.cc/100" />
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Cards */}
          <div className=" flex justify-center items- w-full">
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
            Flyon AI
          </div>

          {/* Menu */}
          <ul className="menu p-4 text-sm flex-1 space-y-4">
        
             
            <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
            <NavLink to='/Dashboard/createPartnerProfile'  className={({ isActive }) =>
                `font-semibold transition-colors duration-200  ${
                  isActive
                    ? "bg-white rounded-2xl text-gray-600 "
                    : " hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              } ><SidebarItem icon={<Cpu size={18} />} text="CreateProfile" badge="2" /></NavLink>
               <NavLink to='/Dashboard/myConnection'  className={({ isActive }) =>
                `font-semibold transition-colors duration-200  ${
                  isActive
                    ? "bg-white rounded-2xl text-gray-600 "
                    : " hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              } ><SidebarItem icon={<FaUserFriends size={18} />} text="CreateProfile" badge="2" /></NavLink>
            <SidebarItem icon={<FileText size={18} />} text="Prediction Logs" />
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

const SidebarItem = ({ icon, text, badge, active }) => {
  return (
    <li>
      <a
        className={`flex items-center gap-3 rounded-lg
        ${active ? "bg-white/20" : "hover:bg-white/10"}`}
      >
        {icon}
        <span className="flex-1">{text}</span>
        {badge && <span className="badge badge-error badge-sm">{badge}</span>}
      </a>
    </li>
  );
};



export default DashboardLayout;
