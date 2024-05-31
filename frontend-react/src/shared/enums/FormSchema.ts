import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().required("name required"),
    email: Yup.string().email().matches(/\.com$/, 'email should end with ".com"').required("emai required"),
    message: Yup.string().required("message required")
})