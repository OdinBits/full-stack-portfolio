import { SxProps } from "@mui/material";

export namespace IForm {
    export interface formState {
        name: string | undefined;
        email: string | undefined;
        message: string | undefined;
    }

    export interface inputState {
        fields: any;
        props: any;
        sx: SxProps
    }

    export interface submissionState {
        submitForm:any
    }

}