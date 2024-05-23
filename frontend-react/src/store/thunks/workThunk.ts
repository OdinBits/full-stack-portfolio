import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../shared/config/client";

const workThunk = createAsyncThunk('portfolio/work', async () => {
        try {
            const res = await client.fetch('*[_type == "works"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default workThunk;