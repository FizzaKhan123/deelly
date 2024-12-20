import React from 'react';
import SearchIcon from '../assets/icons/Search.tsx';

const SearchBar = () => {
  return (
    <div className="flex items-center border rounded-custom-10  p-2 w-full max-w-72 h-11">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none flex-grow p-2 text-sm text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
