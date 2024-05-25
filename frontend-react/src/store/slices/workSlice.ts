import { createSlice } from "@reduxjs/toolkit";
import { work } from "../../shared/types/Work";
import workThunk from "../thunks/workThunk";

const workSlice = createSlice({
    name: 'about',
    initialState: work.initialWorkThunkState,
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
                state.loading = true
            })
            .addCase(workThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.filteredData = action.payload; 
                state.message = 'Successful';
            })
            .addCase(workThunk.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { setFilterData } = workSlice.actions;
export default workSlice.reducer;