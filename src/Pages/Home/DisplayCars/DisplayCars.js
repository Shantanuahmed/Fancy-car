import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import DisplayCar from '../DisplayCar/DisplayCar';

const DisplayCars = () => {
    const [homeCars, setHomeCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5002/display')
            .then(res => res.json())
            .then(data => setHomeCars(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 700, m: 2, color: 'success.main', mt: 4 }} variant="h4" component="div">
                    OUR MOST SOLD CARS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        homeCars.map(homeCar => <DisplayCar key={homeCar._id} homeCar={homeCar}></DisplayCar>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default DisplayCars;