
import { SxProps, TextField, Typography } from '@mui/material';
import { IForm } from '../../shared/interfaces/IForm';

interface IInputFields {
    fields: any;
    meta: any;
    sx: SxProps
}

const InputFields: React.FC<IInputFields> = ({ fields, meta, sx }: any) => {
    return (
        <>
      {console.log('values ', meta.values)}


        {console.log('values fields ', fields.name)}
            <TextField
                id={fields.id}
                label={fields.label} // Corrected typo from "lable" to "label"
                name={fields.name}
                type={fields.type}
                placeholder={fields.placeholder}
                onChange={meta.onChange}
                onBlur={meta.onBlur}
                value={meta.values[fields.name]}
                error={meta.errors && Boolean(meta.errors[fields.name])}
                helperText={meta.errors && meta.errors[fields.name] ? meta.errors[fields.name] : ''}
                sx={sx}
            />
        </>
    );
};

export default InputFields;
