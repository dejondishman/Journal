import React from "react";
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa"; // Importing icons

const JournalCard = ({ image, title, description, userImage, username }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-6 max-w-xl mx-auto">
      {/* User Profile Section */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <img
          src={userImage}
          alt="User Profile"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <span className="font-semibold text-gray-800">{username}</span>
      </div>

      {/* Image Section (only one image per post) */}
      <div className="relative">
        <img
          className="w-full h-60 object-cover rounded-t-xl"
          src={image} // Only one image
          alt={title}
        />
      </div>

      {/* Title and Description Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-800 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Icons and Footer */}
      <div className="flex justify-between p-4 border-t border-gray-200">
        {/* <span className="text-xs text-gray-500">Posted on April 5, 2025</span> */}
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-red-500">
            <FaHeart size={20} />
          </button>
          <button className="text-gray-500 hover:text-blue-500">
            <FaShareAlt size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-500">
            <FaComment size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
