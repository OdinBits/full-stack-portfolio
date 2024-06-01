import { Box, Typography } from '@mui/material';
import style from '../style';
import { headerConfig } from '../../../shared/config/headerConfig';
import { MotionBox } from '../../../components';
import { IHeader } from '../../../shared/interfaces/IHeader';

const Intro: React.FC<IHeader.intro> = ({text}) => {
    return (
        <MotionBox
            id='intro-text'
            sx={style.introText}
            motionProps={{
                initial: { opacity: 0, scale: 0 }, 
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } }, 
                transition: { duration: 0.5 } 
            }}
        >
            <Typography sx={style.introGreetings}>{headerConfig.headerText.greeting}</Typography>
            <Box
                data-id='intro'
                style={style.intro}
            >
                <Typography
                    variant='subtitle2'
                    data-id='intro-subtitle'
                    sx={{ fontSize: '20px', color: '#727375' }}
                >
                    {headerConfig.headerText.introSubtitle}
                </Typography>
                <Typography
                    variant='h5'
                    data-id='intro-title'
                    sx={{ fontSize: '35px', color: '#4b5f80' }}
                >
                    {text}
                </Typography>
            </Box>
        </MotionBox>

    )
}

export default Intro
