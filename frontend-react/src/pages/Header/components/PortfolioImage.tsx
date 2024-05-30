import { Box } from '@mui/material';
import style from '../style';
import MotionBox from '../../../components/MotionBox';
import MotionImage from '../../../components/MotionImage';
import images from '../../../shared/constants/images';

const PortfolioImage = () => {
    return (
        <Box
            id='portfolio-image'
            sx={style.portfolioImage}
        >
            <Box
                data-id='portfolio-content'
                sx={{ display: 'flex', height: 'fit-content', justifyContent: 'center' }}
            >
                <MotionImage
                    data-id='profile-image'
                    sx={style.porfolioImage.image} 
                    alt='portfolioImg'
                    src={images.MyPhoto}
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

                <MotionBox
                    sx={style.porfolioImage.circleImage}
                    motionProps={{
                        initial: { opacity: 0, scale: 0 }, 
                        animate: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                opacity: { duration: 0.5 }, 
                                scale: { duration: 0.8, bounce: 0.6 } 
                            }
                        }
                    }}
                >
                    <MotionImage
                        data-id='circle-image'
                        sx={{}}
                        alt='portfolioCircle'
                        src={images.circle}
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

                </MotionBox>
            </Box>
        </Box>
    )
}

export default PortfolioImage;
