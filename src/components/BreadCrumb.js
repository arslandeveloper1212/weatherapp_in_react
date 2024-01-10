import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Container, Paper } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      World
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Asia
    </Link>,
    <Typography key="3" color="text.primary">
      Pakistan
    </Typography>,
  ];

  return (
    <div style={{ background: 'white', width: '100%' }}>
  <Container maxWidth="xxl">
<Stack  sx={{marginTop:"20px", background:"white"}}>
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{p:2}}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  </Container>
    </div>
  

   
    
  );
}
