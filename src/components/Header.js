import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, InputAdornment, Input, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

import RightDrawer from './Drawer';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here using the searchQuery state
    console.log('Search Query:', searchQuery);
  };

  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: 'flex', alignItems:"center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Your menu icon */}
          </IconButton>
          <Typography variant="h4">
            AccuWeather
          </Typography>
          <Typography variant="h5" sx={{ p: 3 }}>
            Islamabad Islamabad 20°C
          </Typography>
          <Typography component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems:"center" }}>
            <Box sx={{ position: 'relative' }}>
              <Input
                label="Search"
                type= "text"
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
            {/* Add additional components or links here */}
           <Box sx={{display:"flex", alignItems:"center"}}>
           <span style={{ margin: '0 20px' }}><OndemandVideoIcon/></span>
            <span sx={{p:0}}><RightDrawer/></span>
           </Box>
           
            {/* Add more links as needed */}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
