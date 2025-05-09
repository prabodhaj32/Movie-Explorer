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
  const { favorites, toggleFavorite } = useContext(MovieContext); // Access favorites and toggleFavorite function from context
  const navigate = useNavigate(); // Initialize navigation hook

  // Check if the current movie is already in favorites
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <Card
      sx={{
        height: "100%", // Make card fill vertical space
        display: "flex", // Use flex layout
        flexDirection: "column", // Stack children vertically
        justifyContent: "space-between", // Evenly space elements
        cursor: "pointer", // Cursor changes to pointer on hover
      }}
    >
      {/* Movie poster image */}
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // TMDb poster URL
        alt={movie.title}
        onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to movie detail page on click
        sx={{ objectFit: "cover" }} // Maintain aspect ratio and cover the area
      />

      {/* Card content including title, rating, and favorite button */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Movie title with ellipsis if too long */}
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

        {/* Rating and favorite toggle */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          {/* Movie rating */}
          <Typography variant="body2" color="textSecondary">
            ⭐ {movie.vote_average}
          </Typography>

          {/* Favorite icon button - toggles on click */}
          <IconButton onClick={() => toggleFavorite(movie)} color="primary">
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard; 