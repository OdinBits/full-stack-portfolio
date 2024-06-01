import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { Formik } from 'formik';
import { FormTypes } from '../../../shared/types/FormTypes';
import { FormSchema } from '../../../shared/enums/FormSchema';
import { TextFieldRewired } from '../../../components';
import style from '../style';
import { IForm } from '../../../shared/interfaces/IForm';

const Form: React.FC<IForm.submissionState> = ({ submitForm }) => {

    const formikRef = useRef<any>(null);

    return (
        <Box id='Form' sx={style.form.container}>
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
                        <Box
                            component="form"
                            onSubmit={props.handleSubmit}
                            data-id='content'
                            sx={style.form.content}
                        >
                            {FormTypes.fields.map((fields) => (
                                <TextFieldRewired
                                    key={fields.id}
                                    fields={fields}
                                    props={props}
                                    sx={style.form.textField}
                                />
                            ))}

                            <Button type='submit' sx={style.form.submit}>Submit</Button>
                        </Box>
                    );
                }}
            </Formik>
        </Box>
    );
}

export default Form;
