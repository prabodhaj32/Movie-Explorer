// components/SearchBar.jsx
import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { MovieContext } from '../context/MovieContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(MovieContext);

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for movies..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
};

export default SearchBar;
