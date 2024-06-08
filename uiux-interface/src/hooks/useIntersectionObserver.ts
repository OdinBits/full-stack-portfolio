import { useEffect, useRef } from 'react';
import { useAppDispatch } from './useStoreRootState';
import { setActiveSection } from '../store/slices/navigationSlice';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

const useIntersectionObserver = (
    idName: string,
    onIntersect?: IntersectionCallback
) => {
    const dispatch = useAppDispatch();
    const sectionRef = useRef(null);
    const resizeObserverRef:any = useRef(null);

    useEffect(() => {
        const handleIntersect = (entries:any) => {
            entries.forEach((entry:any) => {
                if (entry.isIntersecting) {
                    dispatch(setActiveSection(idName));
                }
                onIntersect?.(entry);
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: [0.5], // Adjust threshold for efficient checks
        });

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            observer.observe(sectionElement);

            // Resize observer to handle dynamic content changes
            resizeObserverRef.current = new ResizeObserver(() => {
                observer.unobserve(sectionElement);
                observer.observe(sectionElement);
            });
            resizeObserverRef.current.observe(sectionElement);
        }

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
            if (resizeObserverRef.current) {
                resizeObserverRef.current.disconnect();
            }
        };
    }, [idName, dispatch, onIntersect]);

    return sectionRef;
};

export default useIntersectionObserver;
