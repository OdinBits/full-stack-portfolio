import { createSlice } from "@reduxjs/toolkit";
import { TWork } from "../../shared/types/TWork";
import THKWork from "../thunks/THKWork";

const SLCWork = createSlice({
    name: 'work',
    initialState: TWork.ThunkState,
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
            .addCase(THKWork.pending, (state) => {
                state.loading = true;
            })
            .addCase(THKWork.fulfilled, (state, action) => {
                state.loading = false;
                state.data = Array.isArray(action.payload) ? action.payload : [];
                state.filteredData = Array.isArray(action.payload) ? action.payload : [];
                state.message = 'Successful';
            })
            .addCase(THKWork.rejected, (state, action) => {
                state.loading = false;
                state.message = 'Failed to load data';
            });
    }
});

export const { setFilterData } = SLCWork.actions;
export default SLCWork.reducer;
