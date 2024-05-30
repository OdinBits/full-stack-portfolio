import { createSlice } from "@reduxjs/toolkit";
import { WorkTypes } from "../../shared/types/WorkTypes";
import { workThunk } from "..";

const workSlice = createSlice({
    name: 'work',
    initialState: WorkTypes.ThunkState,
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
            .addCase(workThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(workThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = Array.isArray(action.payload) ? action.payload : [];
                state.filteredData = Array.isArray(action.payload) ? action.payload : [];
                state.message = 'Successful';
            })
            .addCase(workThunk.rejected, (state, action) => {
                state.loading = false;
                state.message = 'Failed to load data';
            });
    }
});

export const { setFilterData } = workSlice.actions;
export default workSlice.reducer;
