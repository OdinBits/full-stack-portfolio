import { Box } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { IMotionWrap } from '../../shared/interfaces/IMotionWrap';


const MotionImage: React.FC<IMotionWrap.Image> = ({ sx, alt, src, motionProps, imgStyle }: any) => {
    return (
        <Box id='motion-image' sx={sx}>
            <motion.div {...motionProps}>
                <Box
                    data-id='rewired-img'
                    component='img'
                    alt={alt}
                    src={src}
                    sx={{ width:'100%',height:'100%', ...imgStyle}}
                />
            </motion.div>
        </Box>
    );
};

export default MotionImage;
