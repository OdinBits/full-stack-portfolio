import CONSTimages from "../constants/CONSTImages";
import { IAbout } from "../interfaces/IAbout";

export const TAbout = {
    aboutSkills: [
        { id: '1', title: 'Web Development', description: 'I am a good Developer', imgUrl: CONSTimages.about01 },
        { id: '2', title: 'Web Design', description: 'I am a good Developer', imgUrl: CONSTimages.about02 },
        { id: '3', title: 'UI/UX', description: 'I am a good Developer', imgUrl: CONSTimages.about03 },
        { id: '4', title: 'Web Animation', description: 'I am a good Developer', imgUrl: CONSTimages.about04 },
    ],
    ThunkState: {
        loading: false,
        message: "",
        error: "",
        data: undefined
    } as IAbout.ThunkState
};
