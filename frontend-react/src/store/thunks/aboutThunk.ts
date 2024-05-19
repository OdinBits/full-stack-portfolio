import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../shared/config/client";

const aboutThunk = createAsyncThunk('portfolio/about', async () => {
        try {
            const res = await client.fetch('*[_type == "abouts"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default aboutThunk;