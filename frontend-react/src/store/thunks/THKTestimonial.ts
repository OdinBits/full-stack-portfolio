import { createAsyncThunk } from "@reduxjs/toolkit";
import { CFGclient } from "../../shared/config/CFGclient";

const THKTestimonial = createAsyncThunk(
    'portfolio/test',
    async () => {
        try {
            const [testimonials, brands] = await Promise.all([
                CFGclient.fetch('*[_type == "testimonials"]'),
                CFGclient.fetch('*[_type == "brands"]')
            ]);
            return { testimonials, brands };

        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }
);

export default THKTestimonial;
