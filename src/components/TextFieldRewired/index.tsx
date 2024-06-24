import { TextField } from "@mui/material";
import { IForm } from "../../shared/interfaces/IForm";


const TextFieldRewired: React.FC<IForm.inputState> = ({ fields, props, sx }: any) => {
    return (
        <TextField
            id={fields.id}
            label={fields.label}
            name={fields.name}
            type={fields.type}
            placeholder={fields.placeholder}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values[fields.name]}
            error={Boolean(props.errors[fields.name] && props.touched[fields.name])}
            helperText={props.errors[fields.name] && props.touched[fields.name] ? props.errors[fields.name] : undefined}
            multiline={fields.multiline}
            rows={fields.rows}
            sx={sx}
        />
    );
};

export default TextFieldRewired;
