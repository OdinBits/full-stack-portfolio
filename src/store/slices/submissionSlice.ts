import { createSlice } from "@reduxjs/toolkit";
import { SubmissionTypes } from "../../shared/types/SubmissionTypes";
import submissionThunk from "../thunks/submissionThunk";


const submissionSlice = createSlice({
    name: 'submission',
    initialState: SubmissionTypes.submitThunkState,
    reducers: {
        setSubmissionData: (state, action) => {
            const { isSubmitting, submitCount } = action.payload;
            state.SubmissionStatus = isSubmitting;
            state.SubmissionCount = submitCount;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submissionThunk.pending, (state) => {
                state.SubmissionLoading = true
            })
            .addCase(submissionThunk.fulfilled, (state) => {
                state.SubmissionLoading = false;
                state.SubmissionMessage = 'Successful';
                state.SubmissionStatus = true
            })
            .addCase(submissionThunk.rejected, (state) => {
                state.SubmissionLoading = false;
            });
    }
});

export const { setSubmissionData } = submissionSlice.actions;
export default submissionSlice.reducer;
