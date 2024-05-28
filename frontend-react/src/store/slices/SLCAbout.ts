import { createSlice } from "@reduxjs/toolkit";
import THKAbout from "../thunks/THKAbout";
import { TAbout } from "../../shared/types/TAbout";

const SLCAbout = createSlice({
    name: 'about',
    initialState: TAbout.ThunkState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(THKAbout.pending, (state) => {
                state.loading = true
            })
            .addCase(THKAbout.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.message = 'Successfull' 
            })
            .addCase(THKAbout.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export default SLCAbout.reducer;