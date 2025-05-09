import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ darkMode, onToggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const isAuthPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? '#1f1f1f' : '#1976d2',
        color: '#fff',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          🎬 Movie Explorer
        </Typography>

        {!isAuthPage && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
            <Typography variant="body2">Dark Mode</Typography>
            <Switch checked={darkMode} onChange={onToggleTheme} />
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
