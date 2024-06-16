import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const personThunk = createAsyncThunk(
    'person/fetchPersonData', async () => {
        try {
            const res = await axios.get('*[_type == "abouts"]')
            return res;
        }
        catch (error) {
        }
    }
)