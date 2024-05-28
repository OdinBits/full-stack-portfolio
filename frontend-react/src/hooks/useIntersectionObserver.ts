import { useEffect, useRef } from 'react';
import { useAppDispatch } from './useStoreRootState';
import { setActiveSection } from '../store/slices/SLCNavigation';
import { useTheme } from '@mui/material';

const useIntersectionObserver = (idName: string, onEnter?: () => void, onExit?: () => void, onViewChange?: (isDesktop: boolean) => void) => {
    const dispatch = useAppDispatch();
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme(); 
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        dispatch(setActiveSection(idName));
                        onEnter?.();
                    } else {
                        onExit?.();
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.6,
            }
        );

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            observer.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, [idName, dispatch, onEnter, onExit]);

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = theme.breakpoints.values.sm >= 600; 
            onViewChange?.(isDesktop);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [onViewChange, theme.breakpoints.values.sm]);

    return sectionRef;
};

export default useIntersectionObserver;