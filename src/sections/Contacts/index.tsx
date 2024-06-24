import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useAppDispatch, useAppSelector } from '../../store';
import { IForm } from '../../shared/interfaces/IForm';
import submissionThunk from '../../store/thunks/submissionThunk';
import { setSubmissionData } from '../../store/slices/submissionSlice';
import useSendMail from '../../hooks/useSendMail';
import TextBuilder from '../../components/TextBuilder/TextBuilder';
import { footerConfig } from '../../shared/config/footerConfig';
import ContactTypes from './components/ContactTypes';
import Form from './components/Form';
import { CircularProgress, Typography } from '@mui/material';
import './style.scss';
import AppWrap from '../../wrapper/AppWrap';
import { setActiveSection } from '../../store/slices/navigationSlice';
import { NavTypes } from '../../shared/types/NavTypes';

const Contacts: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    const dispatch = useAppDispatch();

    const { SubmissionStatus, SubmissionLoading } = useAppSelector((state) => state.submission);

    const [formData, setFormData] = React.useState<any>(undefined);
    const [countdown, setCountdown] = React.useState(15);

    const submitForm = async (values: IForm.formState, submitCount: number) => {
        if (inView) {
            dispatch(setActiveSection(NavTypes.navItems[3].name));
        }
        await dispatch(submissionThunk(values));
        setFormData(values);

        if (SubmissionStatus) {
            const interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1); 
            }, 1000);

            return () => clearInterval(interval); 
        }
        setTimeout(() => {
            dispatch(setSubmissionData({ isSubmitting: false, submitCount: submitCount }));
        }, 15000);
    };

    useSendMail(SubmissionStatus, formData);


    return (
        <section ref={ref} id='Contacts' className='bg-gray-100'>
            <div className='contacts-content-container'>
                <TextBuilder
                    data={footerConfig.text}
                    defaultStyle={{
                        fontWeight: "bold",
                        fontSize: { xs: '25px', md: "30px" }
                    }}
                    highLightStyle={undefined}
                />

                <ContactTypes />

                {SubmissionStatus ? (
                    <TextBuilder
                        data={footerConfig.thankyou}
                        defaultStyle={{
                            fontWeight: "bold",
                            fontSize: { xs: '25px', md: "30px" }
                        }}
                        highLightStyle={undefined}
                    />
                ) : (
                    <Form submitForm={submitForm} />
                )}

                {SubmissionLoading && (
                    <div >
                        <CircularProgress color="primary" />
                    </div>
                )}

                {SubmissionStatus && (
                    <Typography>
                        Form Re-appear in {countdown} seconds...
                    </Typography>
                )}
            </div>
        </section>
    )
}

export default AppWrap({ Component: Contacts, idName: 'Contacts' });
