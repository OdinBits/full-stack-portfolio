import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const aboutThunk = createAsyncThunk('portfolio/about', async () => {
        try {
            const res = await clientConfig.fetch('*[_type == "abouts"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default aboutThunk;