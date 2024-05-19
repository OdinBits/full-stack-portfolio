import { createSlice } from "@reduxjs/toolkit";
import aboutThunk from "../thunks/aboutThunk";
import { initialAboutThunkState } from "../../shared/types/About";



const aboutSlice = createSlice({
    name: 'about',
    initialState: initialAboutThunkState,
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