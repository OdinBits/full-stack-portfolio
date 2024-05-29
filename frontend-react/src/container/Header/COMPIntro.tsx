import { Box, Typography } from '@mui/material'
import { CFGHeader } from '../../shared/config/CFGHeader'
import STYLHeader from './STYLHeader'
import COMPMotionBox from '../../components/Tools/COMPMotionBox'

const COMPIntro = () => {
    return (
        <COMPMotionBox
            id='intro-text'
            sx={STYLHeader.introText}
            motionProps={{
                initial: { opacity: 0, scale: 0 }, // Initial opacity and scale
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } }, // Animation when component mounts with spring animation
                transition: { duration: 0.5 } // Animation duration
            }}
        >
            <Typography sx={{ fontSize: '40px', flexGrow: 1, textAlign: 'center' }}>{CFGHeader.headerText.greeting}</Typography>
            <Box
                data-id='intro'
                style={STYLHeader.intro}
            >
                <Typography
                    variant='subtitle2'
                    data-id='intro-subtitle'
                    sx={{ fontSize: '20px', color: '#727375' }}
                >
                    {CFGHeader.headerText.introSubtitle}
                </Typography>
                <Typography
                    variant='h5'
                    data-id='intro-title'
                    sx={{ fontSize: '35px', color: '#4b5f80' }}
                >
                    {CFGHeader.headerText.introTitle}
                </Typography>
            </Box>
        </COMPMotionBox>

    )
}

export default COMPIntro
