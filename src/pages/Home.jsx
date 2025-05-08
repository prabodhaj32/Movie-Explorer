// src/pages/Home.jsx
import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Switch,
  Grid,
  CircularProgress,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";

const Home = () => {
  const {
    movies,
    page,
    setPage,
    hasMore,
    loading,
    error,
    searchQuery,
  } = useContext(MovieContext);

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    document.body.style.backgroundColor = !darkMode ? "#121212" : "#fff";
    document.body.style.color = !darkMode ? "#fff" : "#000";
  };

  const fetchMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box p={3}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">🎬 Movie Explorer</Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" mr={1}>
            Dark Mode
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeToggle} />
        </Box>
      </Box>

      {/* Search Bar */}
      <SearchBar />

      {/* Section Title */}
      <Typography variant="h5" mt={4} mb={2}>
        {searchQuery ? "🔍 Search Results" : "🔥 Trending Movies"}
      </Typography>

      {/* Error */}
      {error && <Typography color="error">{error}</Typography>}

      {/* Infinite Scroll Grid */}
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularProgress style={{ display: "block", margin: "20px auto" }} />}
        endMessage={
          <Typography align="center" mt={4}>
            🎉 You've reached the end!
          </Typography>
        }
      >
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
