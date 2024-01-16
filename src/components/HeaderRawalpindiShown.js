import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, InputAdornment, Input, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import RightDrawer from './CustomDrawer';
import { Link } from 'react-router-dom';

const HeaderRawalpindiShown = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSearch = () => {
    // Implement your search logic here using the searchQuery state
    console.log('Search Query:', searchQuery);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar sx={{ backgroundColor: scrollPosition > 250 ? 'black' : 'transparent', transition: 'background-color 0.3s' }}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: 'flex', alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Your menu icon */}
          </IconButton>
          <Link style={{textDecoration:"none", color:"white"}} to="/rawalpindi">
            <Typography variant="h4">
              AccuWeather
            </Typography>
          </Link>

          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ padding: "20px 10px" }}>
              Rawalpindi Punjab 12°C
            </Typography>
            <WbSunnyIcon sx={{ color: "#f05514", p: 0, m: 0 }} />
          </Box>
          <Typography component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: "center" }}>
            <Box sx={{ position: 'relative' }}>
              <Input
                label="Search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  width: 300,
                  backgroundColor: 'white',
                  paddingLeft: '20px',
                  borderRadius: '6px',
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton color="inherit" aria-label="search" onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <span style={{ margin: '0 20px' }}><OndemandVideoIcon /></span>
              <span sx={{ p: 0 }}><RightDrawer /></span>
            </Box>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderRawalpindiShown;