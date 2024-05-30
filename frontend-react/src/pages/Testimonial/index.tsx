import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import style from './style';
import { AppWrap } from '../../wrapper';
import { useAppDispatch, useAppSelector } from '../../store';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import NavbarTypes from '../../shared/types/NavbarTypes';
import testimonialThunk from '../../store/thunks/testimonialThunk';
import TestItems from './components/TestItems';


const Testimonial: React.FC = () => {

    const dispatch = useAppDispatch();
    const [inView, setInView] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);
    const handleViewportChange = (desktop: boolean) => setIsDesktop(desktop);

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[4].name, handleEnter, handleExit);

    React.useEffect(() => {
        dispatch(testimonialThunk());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.testimonial);

    const testimonialComponent = useMemo(() => (
        data?.testimonials?.map((test: any, index: any) => (
            <TestItems key={index} test={test} />
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
            id='Testimonial'
            sx={style.main.container}
        >
            <Box
                data-id='content'
                sx={style.main.content}
            >
                {testimonialComponent}
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Testimonial, idName: 'Testimonial', showCopyright: false })
