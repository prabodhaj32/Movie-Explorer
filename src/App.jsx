// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MoviePage from './pages/MoviePage';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} onToggleTheme={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home darkMode={darkMode} />} />
        <Route path="/movie/:id" element={<MoviePage darkMode={darkMode} />} />
        <Route path="/favorites" element={<Favorites darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
