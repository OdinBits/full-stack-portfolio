import { Box } from '@mui/material';
import style from '../style';
import MotionBox from '../../../components/MotionBox';
import MotionImage from '../../../components/MotionImage';
import images from '../../../shared/constants/images';

const PortfolioImage = () => {
    return (
        <Box id='portfolio-image' sx={style.portfolioImage}>
            {/* Content */}
            <Box data-id='portfolio-content' sx={style.porfolioImage.content}>
                {/* Motion image portfolio */}
                <MotionImage
                    data-id='profile-image'
                    sx={style.porfolioImage.image}
                    alt='portfolioImg'
                    src={images.MyPhoto}
                    imgStyle={{ borderRadius: '50%' }}
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
                {/* Motion Box background circle */}
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
