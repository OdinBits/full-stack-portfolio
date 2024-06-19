import { createSlice } from "@reduxjs/toolkit";
import skillsThunk from "../thunks/skillsThunk";
import { SkillsExperienceType } from "../../shared/types/SkillsExperienceTypes";


const skillSlice = createSlice({
    name: 'skills',
    initialState: SkillsExperienceType.expThunkState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(skillsThunk.pending, (state) => {
                state.expLoading = true;
                state.expError = undefined;
            })
            .addCase(skillsThunk.fulfilled, (state, action) => {
                state.expLoading = false;
                state.expData = action.payload;
                state.expMessage = 'Successful';
            })
            .addCase(skillsThunk.rejected, (state, action) => {
                state.expLoading = false;
                state.expError = action.error.message;
            });
    }
});

export default skillSlice.reducer;