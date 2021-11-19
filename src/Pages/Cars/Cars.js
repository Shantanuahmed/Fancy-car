import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import CarCollection from '../CarCollection/CarCollection';


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5002/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 700, m: 2, color: 'success.main', mt: 4 }} variant="h4" component="div">
                    Here is Our Exclusive Collection
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars.map(car => <CarCollection key={car._id} car={car} ></CarCollection>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Cars;