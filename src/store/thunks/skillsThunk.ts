import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const experienceThunk = createAsyncThunk(
    'portfolio/experiences',
    async () => {
        try {
            const [experiences, skills] = await Promise.all([
                clientConfig.fetch('*[_type == "newExperience"]'),
                clientConfig.fetch('*[_type == "newSkills"]')
            ]);
            return { experiences, skills };

        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }
);

export default experienceThunk;
