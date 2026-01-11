import React, { useContext } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const MovieListItem = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  const navigate = useNavigate();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <ListItem
      sx={{
        borderRadius: 2,
        mb: 1,
        backgroundColor: 'background.paper',
        boxShadow: 1,
        '&:hover': {
          backgroundColor: 'action.hover',
          boxShadow: 2,
        },
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          sx={{ width: 80, height: 120 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {movie.title}
          </Typography>
        }
        secondary={
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {movie.overview.length > 150
                ? `${movie.overview.substring(0, 150)}...`
                : movie.overview}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Chip
                label={`⭐ ${movie.vote_average}`}
                size="small"
                color="primary"
                variant="outlined"
              />
              <Typography variant="body2" color="text.secondary">
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
              </Typography>
            </Box>
          </Box>
        }
      />
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(movie);
        }}
        color="primary"
        sx={{ ml: 1 }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </ListItem>
  );
};

export default MovieListItem;