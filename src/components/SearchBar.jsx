// src/components/SearchBar.jsx
import React, { useContext, useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MovieContext } from "../context/MovieContext";

const SearchBar = () => {
  const { setSearchQuery } = useContext(MovieContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(input);
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <TextField
        variant="outlined"
        placeholder="Search for a movie..."
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton onClick={handleSearch} color="primary">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
