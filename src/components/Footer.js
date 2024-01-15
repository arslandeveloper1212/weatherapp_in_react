import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, List, ListItem, styled, Divider } from '@mui/material';
import { FooterData } from './Footerdata';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const [data, setData] = useState(FooterData);

  const theme = useTheme();

  const ListChange = styled(List)({
  
   lineHeight:"0.2em",
   letterSpacing:"0rem",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h5.fontSize,
   

  });

  const RouterLinkChange = styled(RouterLink)({
    textDecoration: "none",
    color: "black",
  });

  const TypographyChange = styled(Typography)({
    textAlign: "center",
    padding: "30px 10px 0px 0px",
    color: "#878787",
  });

  return (
    <Box sx={{ marginTop: '20px', backgroundColor: 'white', py: 5, px:0, display: 'flex', margin:"auto" , flexDirection: 'column', }}>
      <Container maxWidth="md">
        <Grid container>
          {data.map((section, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "13px", color: "#878787" }} component="span">{section.heading}</Typography>
                <List>
                  {section.links.map((link, linkIndex) => (
                    <ListItem sx={{ padding: "8px 0px" }} key={linkIndex}>
                      <ListChange>
                        <RouterLinkChange to={link.to}>{link.label}</RouterLinkChange>
                      </ListChange>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider />
      </Container>
      <Box>
        <TypographyChange sx={{ fontSize: "10px" }}> © 2024 AccuWeather, Inc. "AccuWeather" and sun design are registered trademarks of AccuWeather, Inc. All Rights Reserved.</TypographyChange>
        <TypographyChange sx={{ fontSize: "13px" }}>Terms of Use | Privacy Policy | Cookie Policy</TypographyChange>
      </Box>
    </Box>
  );
};

export default Footer;
