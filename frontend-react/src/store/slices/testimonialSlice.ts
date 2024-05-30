import { createSlice } from "@reduxjs/toolkit";
import { TestimonialTypes } from "../../shared/types/TestimonialTypes";
import { testimonialThunk } from "..";

const SLCTestimonial = createSlice({
    name: 'test',
    initialState: TestimonialTypes.ThunkState,
    reducers: {
        setFilterData: (state, action) => {
            const filter = action.payload;
            if (filter === '') {
                state.filteredData = state.data; 
            } else {
                state.filteredData = state.data.filter((item: any) => item.tags.includes(filter));
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(testimonialThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(testimonialThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.filteredData = action.payload; 
                state.message = 'Successful';
            })
            .addCase(testimonialThunk.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { setFilterData } = SLCTestimonial.actions;
export default SLCTestimonial.reducer;