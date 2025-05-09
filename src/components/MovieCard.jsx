import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
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
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={() => navigate(`/movie/${movie.id}`)}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.title}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <Typography variant="body2" color="textSecondary">
            ⭐ {movie.vote_average}
          </Typography>
          <IconButton onClick={() => toggleFavorite(movie)} color="primary">
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
