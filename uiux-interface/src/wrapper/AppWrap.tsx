import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';

import NavDots from '../components/NavDots';
import { IAppWrap } from '../shared/interfaces/IAppWrap';

const AppWrap = ({ Component, idName }: IAppWrap) => function HOC() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    gsap.to(section, {
                        opacity: 1,
                        y: 0,
                        duration: 1.0,
                        ease: 'power1.out',
                    });
                }
            },
            {
                threshold: 0.1, // Adjust the threshold as needed
            }
        );

        if (section) {
            gsap.set(section, { opacity: 0, y: 20 }); // Initial state
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <Box
            ref={sectionRef}
            id={idName}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <Component />
            </Box>
            <NavDots idName={idName} />
        </Box>
    );
};

export default AppWrap;
