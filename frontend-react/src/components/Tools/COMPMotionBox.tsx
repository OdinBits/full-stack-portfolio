import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { STYLGlobal } from '../../STYLGlobal';

const COMPMotionBox = ({ sx, motionProps, children }: any) => {
    return (
        <Box sx={sx}>
            <motion.div
                style={STYLGlobal.centeredStyles}
            {...motionProps}
            >
            {children}
        </motion.div>
        </Box >
    );
};

export default COMPMotionBox;
