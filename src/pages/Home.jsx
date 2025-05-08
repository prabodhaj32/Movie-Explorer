// src/pages/Home.jsx
import React, { useEffect, useContext, useState } from "react";
import { Grid, Typography, Switch, Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { MovieContext } from "../context/MovieContext";
import { fetchTrending, searchMovies } from "../utils/api";

const Home = () => {
  const { movies, setMovies, searchQuery } = useContext(MovieContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = searchQuery
          ? await searchMovies(searchQuery)
          : await fetchTrending();
        setMovies(res.data.results);
      } catch (error) {
        console.error("API error:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = !darkMode ? "#121212" : "#fff";
    document.body.style.color = !darkMode ? "#fff" : "#000";
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">🎬 Movie Explorer</Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" mr={1}>Dark Mode</Typography>
          <Switch checked={darkMode} onChange={handleThemeToggle} />
        </Box>
      </Box>

      <SearchBar />

      <Typography variant="h5" mt={4} mb={2}>
        {searchQuery ? "Search Results" : "🔥 Trending Movies"}
      </Typography>

      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
