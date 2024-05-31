import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const skillsThunk = createAsyncThunk(
    'portfolio/skills',
    async () => {
        try {
            const [experiences, skills] = await Promise.all([
                clientConfig.fetch('*[_type == "experiences"]'),
                clientConfig.fetch('*[_type == "skills"]')
            ]);
            return { experiences, skills };

        }
        catch(error) {
            console.error(error);
            throw error; // Re-throw the error to propagate it to the caller
        }
    }
);

export default skillsThunk;
