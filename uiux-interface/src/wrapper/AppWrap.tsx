import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

import NavDots from '../components/NavDots';
import { IAppWrap } from '../shared/interfaces/IAppWrap';

const AppWrap = ({ Component, idName }: IAppWrap) => function HOC() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [ref, inView] = useInView({
        threshold: 0.1, // Adjust the threshold as needed
        triggerOnce: false, // Ensures the animation can trigger multiple times
    });

    useEffect(() => {
        const section = sectionRef.current;

        if (inView) {
            gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: 'power1.out',
            });
        } else {
            gsap.set(section, { opacity: 0, y: 20 });
        }
    }, [inView]);

    return (
        <Box
            ref={ref}
            id={idName}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >
            <Box
                ref={sectionRef}
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                }}
            >
                <Component />
            </Box>
            <NavDots idName={idName} />
        </Box>
    );
};

export default AppWrap;
