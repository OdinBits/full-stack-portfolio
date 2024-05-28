import { createSlice } from "@reduxjs/toolkit";
import THKSkills from "../thunks/THKSkills";
import { TSkills } from "../../shared/types/TSkills";

const SLCSkill = createSlice({
    name: 'about',
    initialState: TSkills.ThunkState,
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
            .addCase(THKSkills.pending, (state) => {
                state.loading = true
            })
            .addCase(THKSkills.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.filteredData = action.payload; 
                state.message = 'Successful';
            })
            .addCase(THKSkills.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { setFilterData } = SLCSkill.actions;
export default SLCSkill.reducer;