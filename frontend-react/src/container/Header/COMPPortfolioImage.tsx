import { Box } from '@mui/material';
import STYLHeader from './STYLHeader';
import CONSTImages from '../../shared/constants/CONSTImages';
import COMPMotionBox from '../../components/Tools/COMPMotionBox';
import COMPMotionImage from '../../components/Tools/COMPMotionImage';

const PortfolioImage = () => {
    return (
        <Box
            id='portfolio-image'
            sx={STYLHeader.portfolioImage}
        >
            <Box
                data-id='portfolio-content'
                sx={{ display: 'flex', height: 'fit-content', justifyContent: 'center' }}
            >
                <COMPMotionImage
                    data-id='profile-image'
                    sx={STYLHeader.porfolioImage.image} 
                    alt='portfolioImg'
                    src={CONSTImages.MyPhoto}
                    imgStyle={{borderRadius:'50%'}}
                    motionProps={{
                        initial: { opacity: 0, scale: 0 }, 
                        animate: { opacity: 1, scale: 1 }, 
                        transition: {
                            duration: 0.5, 
                            scale: {
                                duration: 0.5, 
                                delay: 0.5 
                            }
                        }
                    }}
                />

                <COMPMotionBox
                    sx={STYLHeader.porfolioImage.circleImage}
                    motionProps={{
                        initial: { opacity: 0, scale: 0 }, // Initial opacity and scale
                        animate: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                opacity: { duration: 0.5 }, // Duration of opacity animation
                                scale: { duration: 0.8, bounce: 0.6 } // Duration and bounce for scale animation
                            }
                        }
                    }}
                >
                    <COMPMotionImage
                        data-id='circle-image'
                        sx={{}}
                        alt='portfolioCircle'
                        src={CONSTImages.circle}
                        motionProps={{
                            initial: { opacity: 0, scale: 0 }, // Initial opacity and scale
                            animate: { opacity: 1, scale: 1 }, // Animation when component mounts
                            transition: {
                                duration: 0.5, // Animation duration
                                scale: {
                                    duration: 0.5, // Duration of the scale animation
                                    delay: 0.5 // Delay before the scale animation starts
                                }
                            }
                        }}
                    />

                </COMPMotionBox>
            </Box>
        </Box>
    )
}

export default PortfolioImage;
