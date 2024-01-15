import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, fetchHourlyWeather } from '../Redux/weatherSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import CloudIcon from '@mui/icons-material/Cloud';
import { Divider, Box, List, ListItem, ListItemText, Tabs, Tab, Container, Accordion } from '@mui/material';
import MapComponent from './MapComponent';

export default function Today() {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchWeather());
    dispatch(fetchHourlyWeather());
  }, [dispatch]);

  const { data, loading, error, name } = useSelector((state) => (tabValue === 0 ? state.weather.weather : state.weatherHourly.weatherHourly));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null;
  }

  const { main, weather, wind, sys } = data;

  const sunriseTimestamp = sys.sunrise * 1000;
  const sunsetTimestamp = sys.sunset * 1000;
  const currentTime = new Date().getTime();

  let weatherIcon;
  if (currentTime > sunriseTimestamp) {
    weatherIcon = <WbTwilightIcon sx={{ fontSize: 60, alignItems: 'center' }} />;
  } else if (currentTime < sunsetTimestamp) {
    weatherIcon = <CloudIcon sx={{ fontSize: 60, alignItems: 'center' }} />;
  } else {
    weatherIcon = <WbTwilightIcon sx={{ fontSize: 60, alignItems: 'center' }} />;
  }

  return (
    <Container maxWidth="md">
    <Card sx={{ width: '550px', marginTop: '150px' }}>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Current Weather" />
        <Tab label="Hourly Weather" />
      </Tabs>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {tabValue === 0 ? 'Current Weather' : 'Hourly Weather'}
            </Typography>
            {weatherIcon}
            <Typography variant="h3" sx={{ mb: 1.5 }}>
              {main.temp}°C
            </Typography>
            <Typography variant="h5" sx={{ mb: 1.5 }}>
              {weather[0].description}
            </Typography>
          </Box>
          <Box>
            <List sx={{ '--List-padding': '12px', '--ListItem-paddingX': '7px', '--ListDivider-gap': '12px' }}>
              <ListItem>
                <ListItemText primary={`Wind: ${wind.speed}`} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={`Humidity: ${main.humidity}`} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={`Temperature: ${main.temp} degree`} />
              </ListItem>
              <Divider />
             
              
            </List>
           
          </Box>
        </Box>
      </CardContent>
    
    </Card>
    </Container>
  );
}
