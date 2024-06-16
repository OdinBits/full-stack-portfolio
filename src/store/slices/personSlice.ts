import { createSlice } from "@reduxjs/toolkit";
import { PersonTypes } from "../../shared/types/PersonTypes";
import { personThunk } from "../thunks/personThunk";


const personSlice = createSlice({
    name: 'person',
    initialState: PersonTypes.ThunkState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(personThunk.pending, (state) => {
                state.personLoading = true
            })
            .addCase(personThunk.fulfilled, (state, action) => {
                state.personLoading = false;
                state.personData = action.payload;
                state.personMessage = action.meta.requestStatus 
            })
            .addCase(personThunk.rejected, (state,action) => {
                state.personLoading = false;
                state.personMessage = action.meta.requestStatus
            });
    }
});

export default personSlice.reducer;