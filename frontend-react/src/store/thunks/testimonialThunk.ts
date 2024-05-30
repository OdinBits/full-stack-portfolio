import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientConfig } from "../../shared/config/clientConfig";

const testimonialThunk = createAsyncThunk(
    'portfolio/test',
    async () => {
        try {
            const [testimonials, brands] = await Promise.all([
                clientConfig.fetch('*[_type == "testimonials"]'),
                clientConfig.fetch('*[_type == "brands"]')
            ]);
            return { testimonials, brands };

        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }
);

export default testimonialThunk;
