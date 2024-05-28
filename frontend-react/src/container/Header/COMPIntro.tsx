import { Box, Typography } from '@mui/material'
import { CFGHeader } from '../../shared/config/CFGHeader'
import STYLHeader from './STYLHeader'

const COMPIntro = () => {
    return (
        <Box data-id='intro-text' sx={STYLHeader.introText}>
            <Typography>{CFGHeader.headerText.greeting}</Typography>
            <Box data-id='intro' style={STYLHeader.intro}>
                <Typography variant='subtitle2' data-id='intro-subtitle' sx={{fontSize:'20px',color:'#727375'}}>{CFGHeader.headerText.introSubtitle}</Typography>
                <Typography variant='h5' data-id='intro-title' sx={{fontSize:'25px',color:'#4b5f80'}}>{CFGHeader.headerText.introTitle}</Typography>
            </Box>
        </Box>
    )
}

export default COMPIntro
