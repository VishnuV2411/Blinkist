import { Card, CardMedia } from '@mui/material';
import React from 'react';
import appLogo from "../assets/blinkistLogo.png";

const BlinkImage = () => {
    return (
        <Card>
            <CardMedia 
                component="img"
                height="26px"
                width="px"
                image={appLogo}
                alt="app-logo"
            />
        </Card>
    );
};

export default BlinkImage;