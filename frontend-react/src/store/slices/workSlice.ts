import { createSlice } from "@reduxjs/toolkit";
import { WorkTypes } from "../../shared/types/WorkTypes";
import { workThunk } from "..";

const workSlice = createSlice({
    name: 'work',
    initialState: WorkTypes.ThunkState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(workThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(workThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.message = 'Successful';
            })
            .addCase(workThunk.rejected, (state, action) => {
                state.loading = false;
                state.message = 'Failed to load data';
            });
    }
});

export default workSlice.reducer;
