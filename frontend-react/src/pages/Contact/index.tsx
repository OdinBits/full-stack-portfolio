import { Box, CircularProgress, Typography } from '@mui/material';
import { AppWrap } from '../../wrapper';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import NavbarTypes from '../../shared/types/NavbarTypes';
import { MotionBox, TextBuilder } from '../../components';
import { footerConfig } from '../../shared/config/footerConfig';
import style from './style';
import Contacts from './components/Contacts';
import Form from './components/Form';
import { useAppDispatch, useAppSelector } from '../../store';
import { setSubmissionData } from '../../store/slices/submissionSlice';
import submissionThunk from '../../store/thunks/submissionThunk';
import { IForm } from '../../shared/interfaces/IForm';
import { useEffect, useState } from 'react';
import useSendMail from '../../hooks/useSendMail';

const Contact = () => {
    const dispatch = useAppDispatch();
    const { status, loading } = useAppSelector((state) => state.submission);
    const { data } = useAppSelector((state) => state.person);
    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[4].name);
    const [formData, setFormData] = useState<any>(undefined);
    const [countdown, setCountdown] = useState(15);

    const submitForm = async (values: IForm.formState, submitCount: number) => {
        await dispatch(submissionThunk(values));
        setFormData(values);

        setTimeout(() => {
            dispatch(setSubmissionData({ isSubmitting: false, submitCount: submitCount }));
        }, 15000);
    };

    useSendMail(status, formData);

    useEffect(() => {
        // Start countdown when status changes to true (submission started)
        if (status) {
            const interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1); // Decrement countdown by 1 every second
            }, 1000);

            return () => clearInterval(interval); // Clear interval when component unmounts
        }
    }, [status]);

    return (
        <Box ref={sectionRef} id='Contact' sx={style.main.container}>
            {/* Content */}
            <Box data-id='content' sx={style.main.content}>
                {/* Intro */}
                <TextBuilder
                    data={footerConfig.text}
                    defaultStyle={style.main.text}
                    highLightStyle={undefined}
                />
                {/* Contact - 2 types*/}
                <Contacts phoneNumber={data?.contactNumber} mailAddress={data?.email} />
                {/* Form and Feedback */}
                {status ? (

                    <MotionBox
                        id='thankyou-text'
                        sx={style.main.textContainer}
                        motionProps={{
                            initial: { opacity: 0, scale: 0 },
                            animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
                            transition: { duration: 1.5 },
                        }}
                    >
                        <TextBuilder
                            data={footerConfig.thankyou}
                            defaultStyle={style.main.text}
                            highLightStyle={undefined}
                        />

                    </MotionBox>
                ) : (
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
                )}
                {/* Loading indicator */}
                {loading && (
                    <Box sx={style.main.circularProgression}>
                        <CircularProgress color="primary" />
                    </Box>
                )}

                {status && (
                    <Typography>
                        Form Re-appear in {countdown} seconds...
                    </Typography>
                )}


            </Box>
        </Box>
    );
};

export default AppWrap({ Component: Contact, idName: 'Contact' });
