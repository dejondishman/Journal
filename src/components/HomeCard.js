import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa";
import { useState } from "react";

const HomeCard = ({ image, title, description, userImage, username }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

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

      {/* Post Image Section */}
      <div className="relative">
        <img
          className="w-full h-60 object-cover rounded-t-xl"
          src={image}
          alt={title}
        />
      </div>

      {/* Title and Description */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between p-4 border-t border-gray-200">
        <div className="flex space-x-4">
          <button
            onClick={toggleLike}
            className={`text-gray-500 ${liked ? "text-red-500" : ""}`}
          >
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

export default HomeCard;
