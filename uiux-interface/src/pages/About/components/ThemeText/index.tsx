import { Box, Typography } from '@mui/material';
import { style } from './style';
import { AboutTypes } from '../../../../shared/types/AboutTypes';
import React from 'react';

const ThemeText: React.FC = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.content}>
                <Typography sx={style.title}> ABOUT </Typography>
                <Typography sx={style.paragraph}>
                    {AboutTypes.themeText.firstParagraph}
                </Typography>
            </Box>
        </Box>
    )
}

export default ThemeText
