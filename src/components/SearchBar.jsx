import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../context/MovieContext';
import { TextField, InputAdornment, IconButton, Paper, Box } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

const SearchBar = ({ darkMode = false, variant = 'rounded' }) => {
  const { setSearchQuery } = useContext(MovieContext);
  const [input, setInput] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(input);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [input, setSearchQuery]);

  const clear = () => setInput('');

  const commonProps = {
    fullWidth: true,
    placeholder: 'Search for movies...',
    value: input,
    onChange: (e) => setInput(e.target.value),
  };

  if (variant === 'glass') {
    return (
      <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', px: 1, py: 0.5, bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.9)', borderRadius: 3 }}>
        <TextField
          {...commonProps}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: darkMode ? '#f3f4f6' : '#6b7280' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {input && (
                  <IconButton size="small" onClick={clear}>
                    <CloseIcon sx={{ color: darkMode ? '#f3f4f6' : '#6b7280' }} />
                  </IconButton>
                )}
              </InputAdornment>
            ),
            sx: { px: 1, color: darkMode ? '#fff' : '#111827' },
          }}
        />
      </Paper>
    );
  }

  // default 'rounded' variant
  return (
    <Box>
      <TextField
        {...commonProps}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: darkMode ? '#f3f4f6' : '#6b7280' }} />
            </InputAdornment>
          ),
          sx: {
            bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#fff',
            borderRadius: 2,
            color: darkMode ? '#fff' : '#111827',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
