
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/pagination">Test</Button>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
    </>
  );
};

export default Header;
