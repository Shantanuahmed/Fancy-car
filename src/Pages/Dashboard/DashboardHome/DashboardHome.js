import { Grid } from '@mui/material';
import React from 'react';
import Orders from '../Orders/Orders';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Orders></Orders>
            </Grid>
            {/* <Grid item xs={12} sm={7}>

            </Grid> */}
        </Grid>
    );
};

export default DashboardHome;