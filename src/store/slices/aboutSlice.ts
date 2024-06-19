import { createSlice } from "@reduxjs/toolkit";
import { AboutTypes } from "../../shared/types/AboutTypes";
import aboutThunk from "../thunks/aboutThunk";

const aboutSlice = createSlice({
    name: 'about',
    initialState: AboutTypes.ThunkState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(aboutThunk.pending, (state) => {
                state.AboutLoading = true
            })
            .addCase(aboutThunk.fulfilled, (state, action) => {
                state.AboutLoading = false;
                state.AboutData = action.payload;
                state.AboutMessage = 'Successfull' 
            })
            .addCase(aboutThunk.rejected, (state, action) => {
                state.AboutLoading = false;
            });
    }
});

export default aboutSlice.reducer;