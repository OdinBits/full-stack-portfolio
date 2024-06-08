import { Box, CssBaseline } from '@mui/material'
import React, { ReactNode } from 'react';
import { Navbar } from '../components';

interface MainProps {
    children: ReactNode;
}

const Master: React.FC<MainProps> = ({ children }) => {
    return (
        <div id='master-container'>
            <CssBaseline/>
            <Navbar/>
            <div data-id='master-content'>
                {children}
            </div>
        </div>
    )
}

export default Master
