import { createSlice } from "@reduxjs/toolkit";
import { SkillsTypes } from "../../shared/types/SkillsTypes";
import { skillsThunk } from "..";

const skillSlice = createSlice({
    name: 'skills',
    initialState: SkillsTypes.ThunkState,
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
            .addCase(skillsThunk.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(skillsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.filteredData = action.payload; 
                state.message = 'Successful';
            })
            .addCase(skillsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setFilterData } = skillSlice.actions;
export default skillSlice.reducer;