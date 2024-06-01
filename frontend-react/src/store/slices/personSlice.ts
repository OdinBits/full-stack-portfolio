import { createSlice } from "@reduxjs/toolkit";
import { PersonTypes } from "../../shared/types/PersonTypes";
import personThunk from "../thunks/personThunk";

const personSlice = createSlice({
    name: 'person',
    initialState: PersonTypes.ThunkState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(personThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(personThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.message = 'Successfull' 
            })
            .addCase(personThunk.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export default personSlice.reducer;