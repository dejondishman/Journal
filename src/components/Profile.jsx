import { useState } from "react";

export default function Profile({ image, name, bio }) {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [caption, setCaption] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."); // Example caption
  const [datePosted, setDatePosted] = useState("January 6, 2025"); // Example date

  // Example array of posts (12 in total)
  const posts = new Array(12).fill(null);

  // Create two columns
  const columns = [[], []];

  // Randomly distribute posts into columns
  posts.forEach((_, index) => {
    const colIndex = Math.random() < 0.5 ? 0 : 1;
    columns[colIndex].push(index);
  });

  return (
    <div className="w-full flex flex-col items-center text-black p-4 rounded-t-xl">
      <div className="flex flex-row items-center w-full h-28 sm:h-36 gap-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
          <img className="w-full h-full object-cover" src={image} alt="User" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-xl font-bold">{name}</h2>
          <p className="text-sm sm:text-md text-gray-400">{bio}</p>
        </div>
      </div>

      {/* Line break */}
      <div className="w-full my-4 border-b border-gray-300"></div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 w-full justify-center">
        <button
          onClick={() => setActiveTab("posts")}
          className={`${
            activeTab === "posts" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
          } p-2`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("j-entries")}
          className={`${
            activeTab === "j-entries" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
          } p-2`}
        >
          J-Entries
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full mt-4 flex">
        {activeTab === "posts" ? (
          <div className="flex w-full">
            {/* Left Column */}
            <div className="w-1/2 relative pr-4">
              {columns[0].map((index) => (
                <div
                  key={index}
                  className="relative mb-6"
                  style={{
                    height: `${Math.random() * 100 + 100}px`,
                  }}
                  onClick={() => setSelectedImage(index)} // Set the clicked image
                >
                  <div className="bg-gray-300 rounded-md shadow-md w-full h-full">
                    {/* You can add an image or placeholder inside each box */}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="w-1/2 relative pl-4">
              {columns[1].map((index) => (
                <div
                  key={index}
                  className="relative mb-6"
                  style={{
                    height: `${Math.random() * 100 + 100}px`,
                  }}
                  onClick={() => setSelectedImage(index)} // Set the clicked image
                >
                  <div className="bg-gray-300 rounded-md shadow-md w-full h-full">
                    {/* You can add an image or placeholder inside each box */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Render J-Entries Content */}
            <h3 className="text-xl font-semibold">J-Entries Content</h3>
            <p>Here you can display the user's journal entries.</p>
          </div>
        )}
      </div>

      {/* Image Blow-Up (Modal) */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20"
          onClick={() => setSelectedImage(null)} // Close the image modal when clicking outside
        >
          <div className="relative w-full max-w-3xl bg-white rounded-md p-4">
            {/* Back arrow */}
            <button
              className="absolute top-4 left-4 text-black text-2xl"
              onClick={() => setSelectedImage(null)} // Close the image modal
            >
              &larr;
            </button>

            {/* Image with blow-up effect */}
            <div
              className="bg-gray-300 rounded-md shadow-md w-full h-full"
              style={{
                transition: "transform 0.3s ease-in-out",
                transform: "scale(1.2)", // Scale the image to make it "blow-up"
              }}
            >
              <img
                src={image} // Placeholder image for now, can be updated
                alt="Expanded Post"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Caption and Date */}
            <div className="mt-10 bg-white p-4 rounded-md shadow-md">
              <p className="font-semibold">{caption}</p>
              <p className="text-sm text-gray-500">{datePosted}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fixed "Create" button */}
      <div className="fixed bottom-20 right-4 z-10">
        <button className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600">
          Create
        </button>
      </div>
    </div>
  );
}
