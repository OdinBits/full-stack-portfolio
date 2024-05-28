import { createAsyncThunk } from "@reduxjs/toolkit";
import { CFGclient } from "../../shared/config/CFGclient";

const THKSkills = createAsyncThunk(
    'portfolio/skills',
    async () => {
        try {
            const [experiences, skills] = await Promise.all([
                CFGclient.fetch('*[_type == "experiences"]'),
                CFGclient.fetch('*[_type == "skills"]')
            ]);
            console.log('my data' ,  { experiences, skills })
            return { experiences, skills };

        }
        catch(error) {
            console.error(error);
            throw error; // Re-throw the error to propagate it to the caller
        }
    }
);

export default THKSkills;
