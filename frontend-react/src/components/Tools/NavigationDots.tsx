/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import navAttributes from '../../shared/types/Navbar';
import { Box } from '@mui/material';

const NavigationDots = ({ active }: any) => (
    <Box sx={{
        width:'fit-content',
        height: '100vh',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        position:'absolute',
        right:10
    }}>
        {navAttributes.navPages.map((item, index) => (
            <Box
                component='a'
                href={`#${item}`}
                key={item + index}
                sx={{
                    background: active === item ? '#313BAC' : '#cbcbcb', // Active dot blue, inactive dot faint gray
                    borderRadius: '50%',
                    width: '10px',
                    height: '10px',
                    margin: '10px',
                    transition: 'background-color 0.3s ease',
                }}
            />
        ))}
    </Box>
);

export default NavigationDots;
