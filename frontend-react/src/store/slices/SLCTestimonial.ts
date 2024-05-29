import { createSlice } from "@reduxjs/toolkit";
import { TTestimonial } from "../../shared/types/TTestimonial";
import THKTestimonial from "../thunks/THKTestimonial";

const SLCTestimonial = createSlice({
    name: 'test',
    initialState: TTestimonial.ThunkState,
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
            .addCase(THKTestimonial.pending, (state) => {
                state.loading = true
            })
            .addCase(THKTestimonial.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.filteredData = action.payload; 
                state.message = 'Successful';
            })
            .addCase(THKTestimonial.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { setFilterData } = SLCTestimonial.actions;
export default SLCTestimonial.reducer;