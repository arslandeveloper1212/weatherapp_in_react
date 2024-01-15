import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, CardMedia, IconButton, Input, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import CloudIcon from '@mui/icons-material/Cloud';
import { Link } from 'react-router-dom';

const RawalpindiAPi = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading, error } = useSelector((state) => state.weather.weather);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null;
  }

  const { main, weather, wind, sys, name } = data;

  const sunriseTimestamp = sys.sunrise * 1000;
  const sunsetTimestamp = sys.sunset * 1000;
  const currentTime = new Date().getTime();

  let weatherIcon;
  if (currentTime > sunriseTimestamp && currentTime < sunsetTimestamp) {
    weatherIcon = <WbTwilightIcon sx={{ fontSize: 60, alignItems: 'center' }} />;
  } else {
    weatherIcon = <CloudIcon sx={{ fontSize: 60, alignItems: 'center' }} />;
  }

  const temp = main.temp; 
  const feel_like = main.feels_like;


  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
    // You can perform any search-related logic here
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        sx={{ marginTop: '30px' }}
        image="https://www.awxcdn.com/adc-assets/images/hero/4/1440x450.jpg"
        alt="Your Alt Text"
      />
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Input
          label="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: 500,
            height: 40,
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
        <Box>
          <Typography variant="h5" sx={{ marginTop: '13px', marginBottom: '10px', color: 'white' }}>
            RECENT LOCATIONS
          </Typography>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Card sx={{ maxWidth: '250px', backgroundColor: 'rgba(72, 71, 71, 0.5)', borderRadius: '14px' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14, color: 'white' }} color="text.secondary" gutterBottom>
                  {name}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: '10px', color: 'white' }} color="text.secondary">
                  Pakistan
                </Typography>
                <Box sx={{ display: 'flex', color: 'white' }}>
                  {weatherIcon}
                  <Typography variant="h4">{temp}</Typography>
                </Box>
                <Typography sx={{ color: 'white' }}>Real Feel: {feel_like}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RawalpindiAPi;
