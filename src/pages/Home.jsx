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
  const {
    movies,
    page,
    setPage,
    hasMore,
    loading,
    error,
    searchQuery,
  } = useContext(MovieContext);

  const fetchMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box p={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">🎬 Movie Explorer</Typography>
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
        scrollThreshold={0.95}
        loader={<CircularProgress style={{ display: "block", margin: "20px auto" }} />}
        endMessage={
          <Typography align="center" mt={4}>
            🎉 You've reached the end!
          </Typography>
        }
      >
        <Grid
          container
          spacing={2} // Use spacing for spacing between Grid items
          sx={{ mt: 1 }}
        >
          {movies.map((movie) => (
            <Grid
              key={movie.id}
              sx={{
                width: { xs: "100%", sm: "50%", md: "15%" }, // Define responsive widths for items
                marginBottom: "5px", // Add bottom margin for spacing between rows
              }}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
