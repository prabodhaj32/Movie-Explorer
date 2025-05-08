// pages/MoviePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/api';
import { Typography, Container } from '@mui/material';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchMovieDetails(id);
      setMovie(res.data);
    };
    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4">{movie.title}</Typography>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Typography variant="body1">{movie.overview}</Typography>
      <Typography variant="body2">Genres: {movie.genres.map(g => g.name).join(', ')}</Typography>
    </Container>
  );
};

export default MoviePage;