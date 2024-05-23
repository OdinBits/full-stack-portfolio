import { createSlice } from "@reduxjs/toolkit";
import { work } from "../../shared/types/Work";
import workThunk from "../thunks/workThunk";



const workSlice = createSlice({
    name: 'about',
    initialState: work.initialWorkThunkState,
    reducers: {
        setFilterData: (state, action) => {
            state.filteredData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(workThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(workThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.message = 'Successfull'
            })
            .addCase(workThunk.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { setFilterData } = workSlice.actions;
export default workSlice.reducer;