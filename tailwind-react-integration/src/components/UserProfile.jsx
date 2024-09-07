function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg md:p-8 sm:p-4 md:max-w-sm">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto" 
        />
        <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 text-center">John Doe</h1>
        <p className="text-sm sm:text-base md:text-xl text-gray-600 text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  