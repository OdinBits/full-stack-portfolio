import { useEffect } from 'react';
import emailjs from 'emailjs-com'; 
import { useAppSelector } from '../store';

const useSendMail = (status: boolean, emailData: any) => {
    const { email } = useAppSelector((state) => state.person?.data[0] || {});

    useEffect(() => {
        const sendEmail = async () => {
            try {
                if (!emailData || !emailData.email || !emailData.name || !emailData.message) {
                    console.error('One or more email data fields are missing' );
                    return;
                }

                const serviceId = process.env.REACT_APP_SERVICE_ID;
                const templateId = process.env.REACT_APP_TEMPLATE_ID;
                const userId = process.env.REACT_APP_USER_ID;

                if (!serviceId || !templateId || !userId) {
                    console.error('EmailJS environment variables are not defined');
                    return;
                }

                const templateParams = {
                    to_email: email,
                    from_name: emailData.email,
                    message: `
                        I am ${emailData.name}.
                        ${emailData.message}`, 
                };

                await emailjs.send(serviceId, templateId, templateParams, userId);
            } catch (error) {
                console.error('Error sending email:', error);
            }
        };

        if (status) {

            const timer = setTimeout(() => {
                sendEmail();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status, emailData, email]);
};

export default useSendMail;
