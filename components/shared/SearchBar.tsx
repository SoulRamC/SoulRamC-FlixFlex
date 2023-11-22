import React from "react";
import { FaSearch } from "react-icons/fa";
interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
function SearchBar({ setSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-white text-black h-10 px-5 pr-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="absolute right-0 top-0 mt-3 mr-4">
        <FaSearch className="text-red-500" />
      </button>
    </div>
  );
}

export default SearchBar;
