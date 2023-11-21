import React from "react";
import { FiFilm, FiTv, FiUser } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 opacity-90 text-white p-4 fixed w-full top-0 z-50">
      <div className="flex items-center px-12 justify-between">
        <div className="flex items-center">
          <div className="flex items-center font-extrabold text-red-600 space-x-2">
            <FiFilm className="text-2xl" />
            <span className="text-xl font-semibold">FlixFlex</span>
          </div>
          <div className="ml-4 font-bold">
            <button className="hover:text-gray-300 focus:outline-none">
              Movies
            </button>
            <button className="ml-4 hover:text-gray-300 focus:outline-none">
              TV Series
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            {/* You can replace the userBubble with your user icon */}
            <FiUser className="text-xl" />
          </div>
          {/* Adjust the styles as needed for userBubble */}
          <div className="bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center">
            <FiUser className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
