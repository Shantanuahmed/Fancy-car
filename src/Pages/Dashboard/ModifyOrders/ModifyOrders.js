import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const ModifyOrders = ({ order }) => {
    const { name, price, email, address, city, phone, model, date, details, year, _id } = order;
    const handleDelete = id => {
        const url = `https://morning-temple-93757.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted')
                }
            })
    }
    return (
        <Grid item xs={6} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                <CardContent>
                    <Typography variant="h6" color="green" component="div">
                        Customer Name: {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Model: {model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Order date:{date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight="700">
                        Price: ${price}
                    </Typography>
                    <Button onClick={() => handleDelete(_id)} style={{ backgroundColor: 'turquoise', color: 'green', padding: '5px' }}>Delete</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ModifyOrders;