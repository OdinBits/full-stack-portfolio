import { ISubmission } from "../interfaces/ISubmission";

export const SubmissionTypes = {
    submitThunkState: {
        status: undefined,
        count: undefined,
        loading: false,
        message: "",
        error: "",
        data: undefined
    } as ISubmission
}