import { IForm } from "../interfaces/IForm";

export const FormTypes = {
    
    fields: [
        { id: '1', label: 'name', name: 'name', placeholder: 'enter your name', type: 'string' },
        { id: '2', label: 'email', name: 'email', placeholder: 'enter your email', type: 'string' },
        { id: '3', label: 'message', name: 'message', placeholder: 'enter your message', type: 'string' },
    ],
    initialFields: {
        name:'naming1',
        email:'email1',
        message:'message1'
    } as IForm
} 