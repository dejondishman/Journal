

export default function Profile({image, name}){
    return(
        
            <div className="w-full flex flex-col items-center  text-black p-4 rounded-t-xl">
    {/* Container for Image and Social Media Cards */}
    <div className="flex flex-row items-center  w-full h-28 sm:h-36 gap-3">
      {/* Avatar */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="User"
        />
      </div>

{/* User Info */}
<div>
      <h2 className="text-3xl sm:text-xl font-bold">{name || "Name"}</h2>
      <p className="text-sm sm:text-md text-gray-400">Content Creator</p>
    </div>
 </div>
        </div>
    )
}