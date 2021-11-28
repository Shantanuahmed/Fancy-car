import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddComment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [date, setDate] = React.useState(new Date());

    const onSubmit = data => {
        fetch('https://morning-temple-93757.herokuapp.com/ratings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {

                    alert('Comment successful')
                    reset()
                }
            })
    }

    return (
        <div>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                <input defaultValue="" placeholder="Write your comment here" {...register("comment")} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue={date.toLocaleDateString()} {...register("address", { required: true })} />
                <input placeholder="Rating 1-5" defaultValue="" type="number" {...register("rating", { required: true })} />
                {errors.address && <span className="error">This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddComment;