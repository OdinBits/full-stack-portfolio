import { createSlice } from "@reduxjs/toolkit";
import { SubmissionTypes } from "../../shared/types/SubmissionTypes";
import submissionThunk from "../thunks/submissionThunk";

const submissionSlice = createSlice({
    name: 'submission',
    initialState: SubmissionTypes.submitThunkState,
    reducers: {
        setSubmissionData: (state, action) => {
            const { isSubmitting, submitCount } = action.payload;
            state.status = isSubmitting;
            state.count = submitCount;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submissionThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(submissionThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.message = 'Successful';
                state.status = true
            })
            .addCase(submissionThunk.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { setSubmissionData } = submissionSlice.actions;
export default submissionSlice.reducer;
