import React from 'react';
import Iframe from 'react-iframe';
import { Box } from '@mui/material';

const MapComponent = () => {
  return (
    <Box sx={{marginTop:"20px"}}>
      <Iframe
        url="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20islamabad+(pakistan)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
      
    </Box>
  );
};

export default MapComponent;
