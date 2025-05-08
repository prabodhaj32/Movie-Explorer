import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  const navigate = useNavigate();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <Card sx={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={() => navigate(`/movie/${movie.id}`)}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          ⭐ {movie.vote_average}
        </Typography>
        <IconButton onClick={() => toggleFavorite(movie)} color="primary">
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
