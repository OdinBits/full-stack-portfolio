import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useAppSelector } from './useStoreRootState';

const useSendMail = (status: boolean, emailData: any) => {
    const { personData } = useAppSelector((state) => state.person);

    const sendEmail = async (toEmail:any) => {
        try {
            const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
            const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
            const userId = import.meta.env.VITE_REACT_APP_USER_ID;

            if (!serviceId || !templateId || !userId) {
                console.error('EmailJS environment variables are not defined');
                return;
            }

            const templateParams = {
                to_email: toEmail,
                from_name: emailData.email,
                message: `I am ${emailData.name}. ${emailData.message}`,
            };

            await emailjs.send(serviceId, templateId, templateParams, userId);
            console.log(`Email sent successfully to ${toEmail}`);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const scheduleEmails = () => {
        if (!emailData || !emailData.email || !emailData.name || !emailData.message) {
            console.error('One or more email data fields are missing');
            return;
        }

        if (personData && personData.length > 0) {
            personData.forEach((person:any) => {
                const timer = setTimeout(() => {
                    sendEmail(person.email);
                }, 3000);
                return () => clearTimeout(timer); 
            });
        }
    };

    useEffect(() => {
        if (status) {
            scheduleEmails();
        }
    }, [status, emailData, personData]);
};

export default useSendMail;
