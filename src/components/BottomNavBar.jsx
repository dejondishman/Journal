import React, { useState } from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa"; // Importing icons

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around p-4">
        {/* Home Button */}
        <button
          onClick={() => setActiveTab("home")}
          className={`text-gray-500 ${activeTab === "home" ? "text-blue-500" : ""} hover:text-blue-500`}
        >
          <FaHome size={24} />
        </button>

        {/* Search Button */}
        <button
          onClick={() => setActiveTab("search")}
          className={`text-gray-500 ${activeTab === "search" ? "text-blue-500" : ""} hover:text-blue-500`}
        >
          <FaSearch size={24} />
        </button>

        {/* Notifications Button */}
        <button
          onClick={() => setActiveTab("notifications")}
          className={`text-gray-500 ${activeTab === "notifications" ? "text-blue-500" : ""} hover:text-blue-500`}
        >
          <FaBell size={24} />
        </button>

        {/* Profile Button */}
        <button
          onClick={() => setActiveTab("profile")}
          className={`text-gray-500 ${activeTab === "profile" ? "text-blue-500" : ""} hover:text-blue-500`}
        >
          <FaUser size={24} />
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;
