import { IProjects } from "../interfaces/IProjects";

export const ProjectTypes = {
    projectSkillsDefault: [
        { id: '1', title: 'Web App', description: 'I am a good Developer' },
        { id: '2', title: 'Mobile App', description: 'I am a good Developer' },
        { id: '3', title: 'UI/UX', description: 'I am a good Developer' },
        { id: '4', title: 'React Js', description: 'I am a good Developer' },
        { id: '5', title: 'Type Script', description: 'I am a good Developer' },
        { id: '6', title: 'All', description: 'I am a good Developer' },
    ],
    projectThunkState: {
        projLoading: false,
        projMessage: "",
        projError: "",
        projData: [],
    } as IProjects.ThunkState
}