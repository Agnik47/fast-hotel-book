import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const sideBarLinks = [
        { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
        { name: "Add Room", path: "/owner/add-room", icon: assets.dashboardIcon },
        { name: "List Room", path: "/owner/list-room", icon: assets.dashboardIcon },
      ];
  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 hidden md:flex flex-col transform-all duration-300">
      {sideBarLinks.map((item, index) => (
        <NavLink    
          to={item.path}
          key={index}
          end="/owner"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-blue-600/10  border-blue-600 text-blue-600"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="min-h-g min-w-6 " />
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
