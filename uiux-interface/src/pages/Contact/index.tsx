import { Box, CircularProgress, Typography } from '@mui/material';
import { TextBuilder } from '../../components';
import style from './style';
import Contacts from './components/Contacts';
import Form from './components/Form';
import { useAppDispatch, useAppSelector } from '../../store';

import { useEffect, useState } from 'react';
import useSendMail from '../../hooks/useSendMail';
import submissionThunk from '../../store/thunks/submissionThunk';
import { setSubmissionData } from '../../store/slices/submissionSlice';
import { IForm } from '../../shared/interfaces/IForm';
import { useInView } from 'react-intersection-observer';
import { footerConfig } from '../../shared/config/footerConfig';
import { setActiveSection } from '../../store/slices/navigationSlice';
import { NavTypes } from '../../shared/types/NavTypes';
import AppWrap from '../../wrapper/AppWrap';

const Contact = () => {

    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    const dispatch = useAppDispatch();

    const { status, loading } = useAppSelector((state) => state.submission);

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

        if (inView) {
            dispatch(setActiveSection(NavTypes.navItems[3].name));
        }
        // Start countdown when status changes to true (submission started)
        if (status) {
            const interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1); // Decrement countdown by 1 every second
            }, 1000);

            return () => clearInterval(interval); // Clear interval when component unmounts
        }
    }, [dispatch, status]);

    return (
        <Box ref={ref} id='CONTACT' sx={style.main.container}>
            {/* Content */}
            <Box data-id='content' sx={style.main.content}>
                {/* Intro */}
                <TextBuilder
                    data={footerConfig.text}
                    defaultStyle={style.main.text}
                    highLightStyle={undefined}
                />
                {/* Contact - 2 types*/}
                <Contacts/>
                {/* Form and Feedback */}
                {status ? (
                        <TextBuilder
                            data={footerConfig.thankyou}
                            defaultStyle={style.main.text}
                            highLightStyle={undefined}
                        />

                ) : (

                        <Form submitForm={submitForm} />

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

export default AppWrap({ Component: Contact, idName: 'CONTACT' });
