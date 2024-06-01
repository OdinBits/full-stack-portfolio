import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const workThunk = createAsyncThunk('portfolio/work', async () => {
        try {
            const [works , filterOptions ] = await Promise.all([
                clientConfig.fetch('*[_type == "works"]'),
                clientConfig.fetch('*[_type == "filterOptions"]')
            ]);
            return { works , filterOptions };
        }
        catch(error) {
            console.error(error)
        }
    }
)

export default workThunk;