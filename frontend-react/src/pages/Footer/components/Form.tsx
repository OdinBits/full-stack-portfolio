import { Box, Button } from '@mui/material';
import { Formik } from 'formik';
import { FormTypes } from '../../../shared/types/FormTypes';
import { FormSchema } from '../../../shared/enums/FormSchema';
import { InputFields } from '../../../components';
import style from '../style';
import { IForm } from '../../../shared/interfaces/IForm';

const Form: React.FC<IForm.submissionState> = ({submitForm}) => {
    return (
        <Box
            id='Form'
            sx={style.form.container}
        >
            <Formik
                initialValues={FormTypes.initialFields}
                validationSchema={FormSchema}
                onSubmit={(values, actions) => {
                    submitForm(values,actions);
                    console.log('all values and submit', values,actions);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <Box
                        component="form" 
                        onSubmit={props.handleSubmit} 
                        data-id='content'
                        sx={style.form.content}
                    >
                        {FormTypes.fields.map((fields) => (
                            <InputFields
                                key={fields.id}
                                fields={fields}
                                props={props}
                                sx={style.form.textField}
                            />
                        ))}

                        <Button type='submit' sx={style.form.submit}>Submit</Button>
                    </Box>
                )}
            </Formik>
        </Box>
    )
}

export default Form
