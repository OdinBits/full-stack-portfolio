import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { urlFor, CFGclient } from '../../shared/config/CFGclient';
import STYLTestimonial from './STYLTestimonial';
import { AppWrap } from '../../wrapper';
import { useAppDispatch, useAppSelector } from '../../store';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TNavbar from '../../shared/types/TNavbar';
import THKTestimonial from '../../store/thunks/THKTestimonial';
import COMPTestItems from './COMPTestItems';

const Testimonial: React.FC = () => {

    const dispatch = useAppDispatch();
    const [inView, setInView] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);
    const handleViewportChange = (desktop: boolean) => setIsDesktop(desktop);

    const sectionRef = useIntersectionObserver(TNavbar.navPages[4].name, handleEnter, handleExit);

    React.useEffect(() => {
        dispatch(THKTestimonial());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.testimonial);

    const testimonialComponent = useMemo(() => (
        data?.testimonials?.map((test: any, index: any) => (
            <COMPTestItems key={index} test={test} />
        ))
    ), [data?.testimonials]);

    console.log('data from test ',data)

    // const brandsComponent = useMemo(() => (
    //     data?.brands?.map((test: any, index: any) => (
    //         <COMPTestItems key={index} test={test} />
    //     ))
    // ), [data?.brands]);

    return (
        <Box
            ref={sectionRef}
            id='TESTIMONIAL'
            sx={STYLTestimonial.main.container}
        >
            <Box
                data-id='content'
                sx={STYLTestimonial.main.content}
            >
                {testimonialComponent}
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Testimonial, idName: 'TESTIMONIAL', showCopyright: false })
