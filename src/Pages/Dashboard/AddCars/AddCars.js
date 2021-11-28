import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddCars = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://morning-temple-93757.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {

                    alert('Cars added successful')
                    reset()
                }
            })
    }
    return (
        <div>
            <Typography variant="h4">Add Cars here</Typography>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="" placeholder="model" {...register("model", { required: true })} />
                <input defaultValue="" placeholder="details" {...register("cdetails")} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="price" defaultValue="" {...register("price", { required: true })} />
                <input placeholder="year" defaultValue="" {...register("year", { required: true })} />
                <input placeholder="picture" defaultValue="" {...register("picture", { required: true })} />
                <input placeholder="id" defaultValue="" type="number" {...register("id", { required: true })} />
                {errors.address && <span className="error">This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddCars;