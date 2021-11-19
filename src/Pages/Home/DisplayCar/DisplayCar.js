import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const DisplayCar = ({ homeCar }) => {
    const { model, price, picture, details, year, _id } = homeCar;
    return (
        <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '300px', height: '220px', margin: '0 auto' }}
                    image={picture}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" color="green" component="div">
                        {model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Manufacture: {year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="700">
                        Price: ${price}
                    </Typography>
                    <Link to={`/display/${_id}`} style={{ textDecoration: 'none' }}> <Button style={{ backgroundColor: 'turquoise', color: 'green', padding: '5px' }}>Book Now</Button></Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DisplayCar;