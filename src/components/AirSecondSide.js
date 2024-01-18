import React, { useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { airqualityfacts } from './AirSecondData';
import { Box, Divider } from '@mui/material';

const AirSecondSide = () => {
    const [data, GetData] = useState(airqualityfacts)
    console.log(data);
    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <Typography style={{ paddingTop: "15px", paddingLeft:"15px"}} variant="h4" component="div">
                    Air Quality Facts
                </Typography>
                <CardContent>
                    {
                        data.map((item, index) => {
                            return (
                                <div>
                                    <Divider />
                                    <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                        <Typography variant="body2" color="text.secondary">
                                           {item.title}
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            style={{ height: "66px", width: "66px" }}
                                            image={item.image}
                                            alt="Green Iguana"
                                            sx={{ borderRadius: "20px" }}
                                        />
                                    </Box>
                                </div>
                            )
                        })
                    }

                </CardContent>



            </Card>
        </Box>
    )
}

export default AirSecondSide
