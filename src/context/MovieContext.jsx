import React, { createContext, useEffect, useState } from "react";
import { fetchTrending, searchMovies } from "../utils/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("lastQuery") || "");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const res = searchQuery
          ? await searchMovies(searchQuery, page)
          : await fetchTrending(page);
        const newMovies = res.data.results;

        setMovies((prev) => {
          const combined = page === 1 ? newMovies : [...prev, ...newMovies];
          const unique = Array.from(new Map(combined.map((m) => [m.id, m])).values());
          return unique;
        });

        setHasMore(newMovies.length > 0);
        setError(null);
      } catch (err) {
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [searchQuery, page]);

  // Store last search query
  useEffect(() => {
    localStorage.setItem("lastQuery", searchQuery);
  }, [searchQuery]);

  // Store favorites in localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchQuery,
        setSearchQuery,
        page,
        setPage,
        hasMore,
        loading,
        error,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
