import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const personThunk = createAsyncThunk('portfolio/person', async () => {
        try {
            const res = await clientConfig.fetch('*[_type == "person"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default personThunk;