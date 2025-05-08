// src/utils/api.js
import axios from "axios";

const API_KEY = "65fe9553feb5be3d160d54c833e64294"; // Replace with your actual TMDb API key
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = () =>
  axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);

export const fetchMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`);
