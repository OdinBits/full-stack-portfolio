import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const aboutThunk = createAsyncThunk('portfolio/about', async () => {
        try {
            const res = await client.fetch('*[_type == "abouts"]');
            return res.data;
        }
        catch(error) {
            console.error(error)
        }
    }
)