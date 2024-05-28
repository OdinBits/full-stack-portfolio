import { createAsyncThunk } from "@reduxjs/toolkit";
import { CFGclient } from "../../shared/config/CFGclient";

const THKWork = createAsyncThunk('portfolio/work', async () => {
        try {
            const res = await CFGclient.fetch('*[_type == "works"]');
            return res;
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default THKWork;