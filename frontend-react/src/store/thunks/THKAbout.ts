import { createAsyncThunk } from "@reduxjs/toolkit";
import { CFGclient } from "../../shared/config/CFGclient";

const THKAbout = createAsyncThunk('portfolio/about', async () => {
        try {
            const res = await CFGclient.fetch('*[_type == "abouts"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default THKAbout;