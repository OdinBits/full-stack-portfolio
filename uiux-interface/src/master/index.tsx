import { Box, CssBaseline } from '@mui/material'
import React, { ReactNode } from 'react';
import { style } from './style';
import { Navbar } from '../components';

interface MainProps {
    children: ReactNode;
}

const Master: React.FC<MainProps> = ({ children }) => {
    return (
        <Box id='master-container' sx={style.container}>
            <CssBaseline/>
            <Navbar/>
            <Box data-id='master-content' sx={style.content}>
                {children}
            </Box>
        </Box>
    )
}

export default Master
