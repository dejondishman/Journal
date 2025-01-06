import React, { useState } from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";  // Import Link and useLocation from react-router-dom

const BottomNavBar = () => {
  // Get the current location to highlight the active tab
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around p-4">
        {/* Home Button */}
        <Link to="/" className={`text-gray-500 ${location.pathname === "/" ? "text-blue-500" : ""} hover:text-blue-500`}>
          <FaHome size={24} />
        </Link>

        {/* Search Button */}
        <Link to="/search" className={`text-gray-500 ${location.pathname === "/search" ? "text-blue-500" : ""} hover:text-blue-500`}>
          <FaSearch size={24} />
        </Link>

        {/* Notifications Button */}
        <Link to="/notifications" className={`text-gray-500 ${location.pathname === "/notifications" ? "text-blue-500" : ""} hover:text-blue-500`}>
          <FaBell size={24} />
        </Link>

        {/* Profile Button */}
        <Link to="/profile" className={`text-gray-500 ${location.pathname === "/profile" ? "text-blue-500" : ""} hover:text-blue-500`}>
          <FaUser size={24} />
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
