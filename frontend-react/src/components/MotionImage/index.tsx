import { Box } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion from Framer Motion


const MotionImage = ({ sx, alt, src, motionProps, imgStyle }: any) => {
    return (
        <Box sx={sx}>
            <motion.div {...motionProps}>
                <Box
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
