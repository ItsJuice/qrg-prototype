import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';

export default function Header({ handleMenuToggle }) {
  return (
    <Box>
      <div className="header">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleMenuToggle}
          className="menu-button"
          sx={{display: { xs: 'inline-flex', md: 'none' }}}
        >
          <MenuIcon />
        </IconButton>
        <h1>Quick Reference Guide.</h1>
        <div className="logo">
          <a href="/"><img src={logo} alt="BMW Logo" /></a>
        </div>
      </div>
    </Box>
  );
}
