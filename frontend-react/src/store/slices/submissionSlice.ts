import { createSlice } from "@reduxjs/toolkit";
import { SubmissionTypes } from "../../shared/types/SubmissionTypes";

const submissionSlice = createSlice({
    name: 'submission',
    initialState: SubmissionTypes.submitState,
    reducers: {
        setSubmissionData: (state, action) => {
            const { submissionSuccess, submitCount } = action.payload;
            state.status = submissionSuccess;
            state.count = submitCount;
        },
    },
});

export const { setSubmissionData } = submissionSlice.actions;
export default submissionSlice.reducer;
