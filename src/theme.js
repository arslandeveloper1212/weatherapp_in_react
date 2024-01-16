import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200,
      lg: 1280,
      xl: 1920,
    },
  },
  header:{
    primary:"#1F1F1F",
    secondary:"ffff",
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '0.9rem',
    },
    h6: {
      fontSize: '0.7rem',
    },
  },
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#FF4081',
    },
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
});


