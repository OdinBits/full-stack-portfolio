import { IForm } from "../interfaces/IForm";

export const FormTypes = {

    fields: [
        { id: '1', label: 'name', name: 'name', placeholder: 'enter your name', type: 'string', multiline: false, rows: 1},
        { id: '2', label: 'email', name: 'email', placeholder: 'enter your email', type: 'string', multiline: false, rows: 1},
        { id: '3', label: 'message', name: 'message', placeholder: 'enter your message', type: 'string', multiline: true, rows: 5},
    ],
    initialFields: {
        name: '',
        email: '',
        message: ''
    } as IForm.formState
} 