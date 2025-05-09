import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, onToggleTheme }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? '#1f1f1f' : '#1976d2',
        color: darkMode ? '#fff' : '#fff',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          🎬 Movie Explorer
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
          <Typography variant="body2">Dark Mode</Typography>
          <Switch checked={darkMode} onChange={onToggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
