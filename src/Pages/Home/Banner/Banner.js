import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="top-banner" >
            <Link to="/collection" style={{ textDecoration: 'none' }}>
                <Button style={{ backgroundColor: 'purple', padding: '10px', margin: '10px', fontSize: 22, color: 'pink' }}>Explore more</Button>
            </Link>
        </div>
    );
};

export default Banner;