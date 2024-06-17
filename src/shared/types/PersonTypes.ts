import { IPerson } from "../interfaces/IPerson";

export const PersonTypes = {
    ThunkState: {
        personLoading: false,
        personMessage: "",
        personError: "",
        personData: {}
    } as IPerson.ThunkState
}