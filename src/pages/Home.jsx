import React, { useContext } from "react";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "../components/SearchBar"; 
import MovieCard from "../components/MovieCard"; 
import { MovieContext } from "../context/MovieContext"; 

const Home = () => {
  // Extract state and actions from MovieContext
  const {
    movies,
    page,
    setPage,
    hasMore,
    loading,
    error,
    searchQuery,
  } = useContext(MovieContext);

  // Function to load next page of movies when scrolling
  const fetchMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box p={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">🎬 Movie Explorer</Typography>
      </Box>

      {/* Search bar for entering movie titles */}
      <SearchBar />

      {/* Section title based on search state */}
      <Typography variant="h5" mt={4} mb={2}>
        {searchQuery ? "🔍 Search Results" : "🔥 Trending Movies"}
      </Typography>

      {/* Error display if fetching movies fails */}
      {error && <Typography color="error">{error}</Typography>}

      {/* Infinite scroll section for movies */}
      <InfiniteScroll
        dataLength={movies.length} // Current number of movies
        next={fetchMore} // Function to call to load more movies
        hasMore={hasMore} // Boolean: if more movies are available
        scrollThreshold={0.95} // Fetch next page when 95% scrolled
        loader={<CircularProgress style={{ display: "block", margin: "20px auto" }} />} // Loading spinner
        endMessage={
          <Typography align="center" mt={4}>
          You are reached the end!
          </Typography>
        }
      >
        {/* Grid layout for movie cards */}
        <Grid
          container
          spacing={2} 
          sx={{ mt: 1 }}
        >
          {movies.map((movie) => (
            <Grid
              key={movie.id}
              sx={{
                width: { xs: "100%", sm: "50%", md: "15%" }, // Responsive grid width
                marginBottom: "5px", 
              }}
            >
              <MovieCard movie={movie} /> {/* Individual movie card */}
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
