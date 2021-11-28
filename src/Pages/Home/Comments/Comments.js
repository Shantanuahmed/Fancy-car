import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ShowComment from '../ShowComment/ShowComment';

const Comments = () => {
    const [showRatings, setShowRatings] = useState([])

    useEffect(() => {
        fetch('https://morning-temple-93757.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setShowRatings(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 700, m: 2, color: 'success.main', mt: 4 }} variant="h4" component="div">
                    This is comment section
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        showRatings.map(showRating => <ShowComment key={showRating._id} showRating={showRating}></ShowComment>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Comments;