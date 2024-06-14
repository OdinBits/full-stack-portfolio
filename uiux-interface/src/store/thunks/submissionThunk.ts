import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";
import { IForm } from "../../shared/interfaces/IForm";


const submissionThunk = createAsyncThunk(
    'portfolio/submission', async (payload: IForm.formState) => {
        try {
            const {name, email, message} = payload;

            const contact = {
                _type: 'contact',
                name: name,
                email: email,
                message: message,
            }
            const res = await clientConfig.create(contact);
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default submissionThunk;