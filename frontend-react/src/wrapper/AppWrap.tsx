import { IAppWrap } from '../shared/interfaces/IAppWrap';
import { Box } from '@mui/material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { NavDots, SocialMedia } from '../components';
const AppWrap = ({ Component, idName,showCopyright }: IAppWrap) => function HOC() {

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
                <SocialMedia />

                <Box sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    height: '100%' }}>
                    <Component />
                    {showCopyright && (
                        <Box sx={{ alignSelf: 'flex-end', width: '100%', textAlign: 'right', letterSpacing: '0.1rem', display: { xs: 'none', md: 'block' }, padding: '40px 30px 5px 0px', background: '#F3F5F7' }}>
                            <p style={{ fontSize: '15px', margin: 0 }}>@2024 NISHANT</p>
                            <p style={{ fontSize: '15px', margin: 0 }}>All rights reserved</p>
                        </Box>
                    )}
                </Box>

                <NavDots />
            </Box>
        </motion.div>
    );
};

export default AppWrap;
