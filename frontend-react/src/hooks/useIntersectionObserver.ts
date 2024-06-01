import { useEffect, useRef } from 'react';
import { useAppDispatch } from './useStoreRootState';
import { setActiveSection } from '../store/slices/navigationSlice';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

const useIntersectionObserver = (
    idName: string,
    onIntersect?: IntersectionCallback
) => {
    const dispatch = useAppDispatch();
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        dispatch(setActiveSection(idName));
                    }
                    onIntersect?.(entry);
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
    }, [idName, dispatch, onIntersect]);

    return sectionRef;
};

export default useIntersectionObserver;
