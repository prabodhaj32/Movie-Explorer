import axios from "axios";

const API_KEY = "65fe9553feb5be3d160d54c833e64294"; // API key
const BASE_URL = "https://api.themoviedb.org/3";

// Axios instance with base URL and default params
const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch trending movies of the week
export const fetchTrending = () =>
  tmdb.get("/trending/movie/week");

// Search movies by query
export const searchMovies = (query) =>
  tmdb.get("/search/movie", {
    params: { query },
  });

// Fetch movie details with credits (cast) and videos (trailers)
export const fetchMovieDetails = (id) =>
  tmdb.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits,videos",
    },
  });
