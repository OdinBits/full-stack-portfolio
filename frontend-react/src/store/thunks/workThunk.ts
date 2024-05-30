import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const workThunk = createAsyncThunk('portfolio/work', async () => {
        try {
            const res = await clientConfig.fetch('*[_type == "works"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default workThunk;