import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

export const personThunk = createAsyncThunk('portfolio/person', async () => {
        try {
            const res = await clientConfig.fetch('*[_type == "person"]')
            return res;
        }
        catch (error) {
        }
    }
)