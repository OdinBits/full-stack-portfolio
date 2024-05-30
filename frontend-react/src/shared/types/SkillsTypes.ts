import { ISkills} from "../interfaces/ISkills";

export const SkillsTypes = {
    ThunkState: {
        loading: false,
        message: "",
        error: "" ,
        data: [],
        filteredData: [],
    } as ISkills.ThunkState
}