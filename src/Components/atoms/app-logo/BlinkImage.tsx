import { Card, CardMedia } from '@mui/material';
import React from 'react';
import appLogo from "/home/vishvrt/TypeScript/my-app/public/images/blinkistLogo.png";

const BlinkImage = () => {
    return (
        <Card>
            <CardMedia 
                component="img"
                height="26px"
                width="99px"
                image={appLogo}
                alt="app logo"
            />
        </Card>
    );
};

export default BlinkImage;