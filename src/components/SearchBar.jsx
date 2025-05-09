import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';

const SearchBar = ({ darkMode }) => {
  const { setSearchQuery } = useContext(MovieContext);
  const [input, setInput] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(input);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [input, setSearchQuery]);

  return (
    <input
      type="text"
      placeholder="Search for movies..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className={`w-full px-4 py-2 rounded-md mb-4 transition-colors border focus:outline-none
        ${darkMode
          ? 'bg-red-800 text-white placeholder-white border-red-400 focus:border-red-300'
          : 'bg-gray-100 text-black placeholder-gray-500 border-gray-300 focus:border-blue-500'
        }`}
    />
  );
};

export default SearchBar;
