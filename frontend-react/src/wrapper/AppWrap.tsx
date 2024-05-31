import { IAppWrap } from '../shared/interfaces/IAppWrap';
import { Box } from '@mui/material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { NavDots, SocialMedia } from '../components';
const AppWrap = ({ Component, idName}: IAppWrap) => function HOC() {

    const sectionRef = useIntersectionObserver(idName);

    return (
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            duration: 0.8,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.3,
        }}
        // whileHover={{ scale: 1.05 }}
        >
            <Box
                ref={sectionRef}
                id={idName}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                    position: 'relative',
                }}
            >
                {/* <SocialMedia /> */}

                <Box sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    height: '100%' }}>
                    <Component />
                </Box>

                <NavDots />
            </Box>
        </motion.div>
    );
};

export default AppWrap;
