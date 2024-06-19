import { createSlice } from "@reduxjs/toolkit";
import { ProjectTypes } from "../../shared/types/ProjectTypes";
import workThunk from "../thunks/workThunk";


const workSlice = createSlice({
    name: 'work',
    initialState: ProjectTypes.projectThunkState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(workThunk.pending, (state) => {
                state.projLoading = true;
            })
            .addCase(workThunk.fulfilled, (state, action) => {
                state.projLoading = false;
                state.projData = action.payload;
                state.projMessage = 'Successful';
            })
            .addCase(workThunk.rejected, (state, action) => {
                state.projLoading = false;
                state.projMessage = 'Failed to load data';
            });
    }
});

export default workSlice.reducer;
