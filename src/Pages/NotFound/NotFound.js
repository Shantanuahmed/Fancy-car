import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Looks like you are lost</h3>
            <br />
            <h1>Error 404</h1>
            <br />
            <br />
            <Link to='/home'>
                <Button>Go back</Button></Link>
        </div>
    );
};

export default NotFound;