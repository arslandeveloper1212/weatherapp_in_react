import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import CustomTabs from './CustomTabs';
import AirSecondComp from './AirSecondComp';
import AirSecondSide from './AirSecondSide';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AirQuality() {
    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div style={{ marginTop: "90px" }}>
            <CustomTabs />
            <Container maxWidth="md" sx={{ marginTop: "30px" }}>
                <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="column">
                            <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: "10px" }}>
                                Current Air Quality
                            </Typography>
                            <Divider light />
                            <Box sx={{ justifyContent: "space-between", display: "flex", marginTop: "10px" }}>
                                <Typography gutterBottom variant="h4" component="div" sx={{ marginBottom: "0px" }}>
                                    Today
                                </Typography>
                                <HelpOutlineIcon />

                            </Box>
                            <Typography gutterBottom variant="h5" component="div" sx={{ paddingLeft: "6px" }}>
                                1/16
                            </Typography>
                        </Stack>
                        <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
                            <BlurCircularIcon sx={{ fontSize: "90px" }} />
                            <Box sx={{ flexDirection: "column" }}>
                                <Typography>Dangerous</Typography>
                                <Typography color="text.secondary" variant="h5">
                                    Any exposure to the air, even for a few minutes, can lead to serious health effects on everybody. Avoid outdoor activities.
                                </Typography>
                                <Typography variant='h6' style={{ marginTop: "10px", color: "#9d9d9d" }}>Based on Current Pollutants</Typography>
                            </Box>
                        </Box>

                    </Box>
                    <Divider light />
                    <div style={{ display: 'flex', justifyContent: "end" }}>
                        <Box sx={{ p: 2, flexDirection: 'column' }}>
                            <Typography variant='h6'>Learn more at</Typography>
                            <Typography variant='h5' style={{ color: "#7496f9", fontWeight: "bold" }}>plumbe Labs</Typography>
                        </Box>
                    </div>
                </Card>
                <Box sx={{ display: 'flex', gap: '30px' }}>
          <AirSecondComp />
          {!isSmallScreen && <AirSecondSide />}
        </Box>
            </Container>


        </div>

    );
}
