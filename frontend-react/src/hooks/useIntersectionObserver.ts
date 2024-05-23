// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../store/slices/navigationSlice';

const useIntersectionObserver = (idName:string) => {
    const dispatch = useDispatch();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        dispatch(setActiveSection(idName));
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
    }, [idName, dispatch]);

    return sectionRef;
};

export default useIntersectionObserver;
