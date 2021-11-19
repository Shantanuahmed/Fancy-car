import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const UpComing = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={{ backgroundColor: "gray" }}>
                <Typography sx={{ fontWeight: 700, m: 3, color: 'success.main', mt: 4 }} variant="h4" component="div">
                    About Us
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Typography variant="h6" style={{ color: 'white' }}>We are one of the leading automobils company of Bangladesh since over a dacade now. We are serving our customer with loyality and honestly. We have Won the best Automobils import award from Bangladesh government for the year 2019</Typography>
                    <ul>
                        <li style={{ color: 'white' }}>Best Seller award 2018</li>
                        <li style={{ color: 'white' }}>Best Importer 2019</li>
                        <li style={{ color: 'white' }}>Best Customer Review</li>
                        <li style={{ color: 'white' }}>Short time delivery</li>
                        <li style={{ color: 'white' }}>Best after sale service</li>
                    </ul>
                </Grid>
            </Container>
        </Box>
    );
};

export default UpComing;