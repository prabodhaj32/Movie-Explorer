// components/Favorites.jsx
import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <>
      <Typography variant="h5" sx={{ m: 2 }}>My Favorites</Typography>
      <Grid container>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
};

export default Favorites;
