import { Box, Typography } from '@mui/material'
import React from 'react'
import { headerConfig } from '../../shared/config/Header'
import headerStyle from './HeaderStyle'

const Intro = () => {
    return (
        <Box data-id='intro-text' sx={headerStyle.introText}>
            <Typography>{headerConfig.headerText.greeting}</Typography>
            <Box data-id='intro' style={headerStyle.intro}>
                <Typography variant='subtitle2' data-id='intro-subtitle'>{headerConfig.headerText.introSubtitle}</Typography>
                <Typography variant='h5' data-id='intro-title'>{headerConfig.headerText.introTitle}</Typography>
            </Box>
        </Box>
    )
}

export default Intro
