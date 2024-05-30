import { Box } from '@mui/material';
import { Formik } from 'formik';
import { FormTypes } from '../../../shared/types/FormTypes';
import { FormSchema } from '../../../shared/enums/FormSchema';
import { InputFields } from '../../../components';
import style from '../style';

const Form = () => {
    return (
        <Box
            id='Form'
            sx={style.form.container}
        >
            <Formik
                initialValues={FormTypes.initialFields}
                validationSchema={FormSchema}
                onSubmit={async (values, actions) => {
                }}
            >
                {(meta) => (
                    <Box
                        data-id='content'
                        sx={style.form.content}
                    >
                        {FormTypes.fields.map((fields) => (
                            <InputFields
                                key={fields.id}
                                fields={fields}
                                meta={meta}
                                sx={style.form.textField}
                            />
                        ))}
                    </Box>
                )}
            </Formik>
        </Box>
    )
}

export default Form
