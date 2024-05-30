import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
    message: Yup.string().required("Message is required")
})