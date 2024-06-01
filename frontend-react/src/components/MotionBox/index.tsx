import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styleGlobal } from '../../styleGlobal';

const MotionBox = ({ sx, motionProps, children }: any) => {
    return (
        <Box id='motion-box' sx={sx}>
            <motion.div style={styleGlobal.centeredStyles} {...motionProps}>
            {children}
        </motion.div>
        </Box >
    );
};

export default MotionBox;
