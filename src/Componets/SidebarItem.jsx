import React from 'react';

const SidebarItem = ({ icon, text, badge,to }) => {
    return (
         <li>
     <NavLink to={to}  
        className={({ isActive }) =>`flex items-center gap-3 rounded-lg
        ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
      >
        {icon}
        <span className="flex-1">{text}</span>
        {badge && <span className="badge badge-error badge-sm">{badge}</span>}
      </NavLink>
    </li>
    );
};

export default SidebarItem;