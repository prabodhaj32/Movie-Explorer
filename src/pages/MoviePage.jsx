import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/api';
import { Typography, Container, Chip, Box } from '@mui/material';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchMovieDetails(id);
        setMovie(res.data);

        // Get cast & trailer
        const credits = res.data.credits?.cast || [];
        setCast(credits.slice(0, 5)); // show top 5 cast

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

  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{movie.title}</Typography>
      <Box display="flex" gap={3}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '300px', borderRadius: 10 }}
        />
        <Box>
          <Typography variant="body1" gutterBottom>{movie.overview}</Typography>
          <Typography variant="body2" gutterBottom>
            Genres: {movie.genres.map((g) => g.name).join(', ')}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Release Date: {movie.release_date}
          </Typography>

          <Typography variant="h6" mt={2}>Top Cast</Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {cast.map((actor) => (
              <Chip key={actor.id} label={actor.name} variant="outlined" />
            ))}
          </Box>
        </Box>
      </Box>

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
