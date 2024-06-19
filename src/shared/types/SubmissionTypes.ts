import { ISubmission } from "../interfaces/ISubmission";

export const SubmissionTypes = {
    submitThunkState: {
        SubmissionStatus: undefined,
        SubmissionCount: undefined,
        SubmissionLoading: false,
        SubmissionMessage: "",
        SubmissionError: "",
        SubmissionData: undefined
    } as ISubmission
}