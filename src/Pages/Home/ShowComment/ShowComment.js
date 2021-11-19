import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const ShowComment = ({ showRating }) => {
    const { name, comment, address, rating } = showRating;
    return (
        <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h6" color="green" component="div">
                        Customer Name: {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Review date: {address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {comment}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="700">
                        <Rating name="read-only" value={rating} readOnly />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ShowComment;