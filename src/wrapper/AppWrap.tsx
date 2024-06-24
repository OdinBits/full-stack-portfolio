import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { IAppWrap } from '../shared/interfaces/IAppWrap';
import NavDots from '../components/NavDots';
import './style.scss';

const AppWrap = ({ Component, idName }: IAppWrap) => function HOC() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
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
        <div
            className='app-wrap-container'
            ref={ref}
            id={idName}
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
        </div>
    );
};

export default AppWrap;
