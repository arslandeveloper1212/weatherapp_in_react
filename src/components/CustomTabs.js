import { Box, Container, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomTabsData } from './CustomTabsData';

const CustomTabs = () => {
  const [tabsData] = useState(CustomTabsData[0].sections);

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: "90px", backgroundColor: "#EEF3F8", display: "flex", gap: "20px", padding:"20px"}}>
        {tabsData.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider orientation="vertical" variant="middle" flexItem />}
            <Typography sx={{ textAlign: "center" }}>
              <Link to={item.link} style={{ textDecoration: "none" }}>{item.title}</Link>
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );
};

export default CustomTabs;
