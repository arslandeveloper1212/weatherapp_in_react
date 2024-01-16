import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomTabs from './CustomTabs'

const Health = () => {
  return (<div>
    <CustomTabs/>
     <Container maxWidth="md">
      <Typography variant='h4' sx={{ marginTop: "90px" }}>Health</Typography>
      <Box >
        <Grid container sx={{ marginTop: "20px" }} spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Arthritis</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "green", margin: "10px 0px" }} />
              <Typography>Low</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Sinus Pressure</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "purple", margin: "10px 0px" }} />
              <Typography>Extreme</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Common</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "lightgreen", margin: "10px 0px" }} />
              <Typography>Cold</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Flu</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "green", margin: "10px 0px" }} />
              <Typography>Low</Typography>
            </Box>
          </Grid>
     
        </Grid>
      </Box>


      <Typography variant='h4' sx={{ marginTop: "40px" }}>Outdoor Activities</Typography>
      <Box >
        <Grid container sx={{ marginTop: "20px" }} spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Arthritis</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "green", margin: "10px 0px" }} />
              <Typography>Low</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Sinus Pressure</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "purple", margin: "10px 0px" }} />
              <Typography>Extreme</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Common</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "lightgreen", margin: "10px 0px" }} />
              <Typography>Cold</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Box sx={{ backgroundColor: "#F5F7FA", padding: "20px", borderRadius: "6px", height: "auto" }}>
              <Typography>Flu</Typography>
              <Divider sx={{ width: "50px", height: "4px", backgroundColor: "green", margin: "10px 0px" }} />
              <Typography>Low</Typography>
            </Box>
          </Grid>
     
        </Grid>
      </Box>
    </Container>
  </div>
   
  )
}

export default Health
