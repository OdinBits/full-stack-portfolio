import { IForm } from "../interfaces/IForm";

export const FormTypes = {
    
    fields: [
        {id:1,lable:'name' , name:'name', placeHolder:'enter your name', type:'string'},
        {id:2,lable:'name' , name:'name', placeHolder:'enter your name', type:'string'},
        {id:3,lable:'name' , name:'name', placeHolder:'enter your name', type:'string'},
    ],
    initialFields: {
        name:'',
        email:'',
        message:''
    } as IForm
} 