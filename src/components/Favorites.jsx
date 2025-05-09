import React, { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        ❤️ Favorite Movies
      </Typography>

      {favorites.length === 0 ? (
        <Typography variant="body1">You have no favorite movies yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid
              item
              key={movie.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Favorites;
