
import { SxProps, TextField } from '@mui/material';

interface IInputFields {
    fields: any;
    meta: any;
    sx: SxProps
}

const InputFields: React.FC<IInputFields> = ({ fields, meta , sx}: any) => {
    return (
        <TextField
            id={fields.id}
            name={fields.name}
            type={fields.type}
            placeholder={fields.placeholder}
            onChange={meta.onChange}
            onBlur={meta.onBlur}
            value={meta.values[fields.name]}
            sx={sx}
            error={meta.errorMessage[fields.name]}
        />
    )
}

export default InputFields;
