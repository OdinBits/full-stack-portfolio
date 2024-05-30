import { createSlice } from "@reduxjs/toolkit";
import { AboutTypes } from "../../shared/types/AboutTypes";
import { aboutThunk } from "..";

const aboutSlice = createSlice({
    name: 'about',
    initialState: AboutTypes.ThunkState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(aboutThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(aboutThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.message = 'Successfull' 
            })
            .addCase(aboutThunk.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export default aboutSlice.reducer;