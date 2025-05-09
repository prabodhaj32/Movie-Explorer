import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchMovieDetails } from '../utils/api'; 
import { Typography, Container, Chip, Box } from '@mui/material';

const MoviePage = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null); 
  const [cast, setCast] = useState([]); 

  // Fetch movie details when component mounts or 'id' changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchMovieDetails(id); // Call TMDb API
        setMovie(res.data); // Save movie data to state

        // Extract top 5 cast members
        const credits = res.data.credits?.cast || [];
        setCast(credits.slice(0, 5));

        // Extract YouTube trailer link
        const trailer = res.data.videos?.results.find(
          (v) => v.type === 'Trailer' && v.site === 'YouTube'
        );
        if (trailer) setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [id]);

  // Show loading state if movie data isn't ready
  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      {/* Movie title */}
      <Typography variant="h4" gutterBottom>{movie.title}</Typography>

      {/* Main content: poster + details */}
      <Box display="flex" gap={3}>
        {/* Movie Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '300px', borderRadius: 10 }}
        />

        {/* Movie info */}
        <Box>
          <Typography variant="body1" gutterBottom>{movie.overview}</Typography>

          {/* Genre list */}
          <Typography variant="body2" gutterBottom>
            Genres: {movie.genres.map((g) => g.name).join(', ')}
          </Typography>

          {/* Release date */}
          <Typography variant="body2" gutterBottom>
            Release Date: {movie.release_date}
          </Typography>

          {/* Top cast section */}
          <Typography variant="h6" mt={2}>Top Cast</Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {cast.map((actor) => (
              <Chip key={actor.id} label={actor.name} variant="outlined" />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Trailer section (if available) */}
      {trailerUrl && (
        <>
          <Typography variant="h6" mt={4}>Trailer</Typography>
          <Box mt={1}>
            <iframe
              width="100%"
              height="400"
              src={trailerUrl}
              title="Movie Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        </>
      )}
    </Container>
  );
};

export default MoviePage;
