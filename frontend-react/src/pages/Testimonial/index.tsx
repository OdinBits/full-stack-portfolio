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

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[4].name);

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
        <Box id='Testimonial' ref={sectionRef} sx={style.main.container}>
            <Box
                data-id='content'
                sx={style.main.content}
            >
                {testimonialComponent}
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Testimonial, idName: 'Testimonial'})
