import { IPerson } from "../interfaces/IPerson";

export const PersonTypes = {
    ThunkState: {
        loading: false,
        message: "",
        error: "",
        data: undefined
    } as IPerson.ThunkState
}