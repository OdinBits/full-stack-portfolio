import { AppBar, Toolbar, Typography, Container, Box, Snackbar, Alert } from '@mui/material';
import { AppWrap } from '../../wrapper';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import NavbarTypes from '../../shared/types/NavbarTypes';
import { useState } from 'react';
import { MotionBox, TextBuilder } from '../../components';
import { footerConfig } from '../../shared/config/footerConfig';
import style from './style';
import Contacts from './components/Contacts';
import Form from './components/Form';
import { useAppDispatch, useAppSelector } from '../../store';
import { setSubmissionData } from '../../store/slices/submissionSlice';
import submissionThunk from '../../store/thunks/submissionThunk';
import { IForm } from '../../shared/interfaces/IForm';

const Contact = () => {

    const dispatch = useAppDispatch();

    const { status } = useAppSelector((state) => state.submission)


    const [inView, setInView] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const submitForm = async (values: IForm.formState, submitCount: number) => {
        await dispatch(submissionThunk(values));

        setTimeout(() => {
            dispatch(setSubmissionData({ isSubmitting: false, submitCount: submitCount }));
        }, 15000);
    };


    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[4].name, handleEnter, handleExit);


    return (

        <Box
            ref={sectionRef}
            id='Contact'
            sx={style.main.container}
        >
            <Box
                data-id='content'
                sx={style.main.content}
            >
                <TextBuilder
                    data={footerConfig.text}
                    defaultStyle={style.main.text}
                    highLightStyle={undefined}
                />

                <Contacts />

                {status ? 
                        <TextBuilder
                            data={footerConfig.thankyou}
                            defaultStyle={style.main.text}
                            highLightStyle={undefined}
                        /> 
                    : 
                        <MotionBox
                            id='form-submission'
                            sx={{ width: '100%', height: '100%' }}
                            motionProps={{
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
                                transition: { duration: 0.5 },
                            }}
                        >
                            <Form submitForm={submitForm} />
                        </MotionBox>
                }

            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Contact, idName: 'Contact'})
