import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ModifyOrders from '../../ModifyOrders/ModifyOrders';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5002/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 700, m: 2, color: 'success.main', mt: 4 }} variant="h4" component="div">
                    Modify Orders{orders.length}
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        orders.map(order => <ModifyOrders key={order._id} order={order} ></ModifyOrders>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageOrders;