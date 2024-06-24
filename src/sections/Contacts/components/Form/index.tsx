import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { Formik } from 'formik';
import { IForm } from '../../../../shared/interfaces/IForm';
import { FormTypes } from '../../../../shared/types/FormTypes';
import { FormSchema } from '../../../../shared/enums/FormSchema';
import TextFieldRewired from '../../../../components/TextFieldRewired';
import './style.scss';


const Form: React.FC<IForm.submissionState> = ({ submitForm }) => {

    const formikRef = useRef<any>(null);

    return (
        <div id='Form' className='contact-form-container'>
            <Formik
                initialValues={FormTypes.initialFields}
                validationSchema={FormSchema}
                onSubmit={ async (values, actions) => {
                    await submitForm(values, formikRef.current.submitCount);
                    actions.resetForm();
                }}
            >
                {(props) => {
                    formikRef.current = props;
                    return (
                        <form
                            onSubmit={props.handleSubmit}
                            className='flex flex-col justify-center'
                        >
                            {FormTypes.fields.map((fields) => (
                                <TextFieldRewired
                                    key={fields.id}
                                    fields={fields}
                                    props={props}
                                    sx={{ marginTop:'10px',
                                        width:'100%'}}
                                />
                            ))}

                            <Button className=' py-2 px-6 mt-8 w-2/4 mx-auto rounded-lg border-2 border-solid border-gray-300 text-gray-500' type='submit'>Submit</Button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default Form;
