import { IWorkProps } from "../interfaces/IWorkProps";


export const work = {
    workSkills: [
        { id: '1', title: 'Web App', description: 'I am a good Developer' },
        { id: '2', title: 'Mobile App', description: 'I am a good Developer' },
        { id: '3', title: 'UI/UX', description: 'I am a good Developer' },
        { id: '4', title: 'React Js', description: 'I am a good Developer' },
        { id: '5', title: 'Type Script', description: 'I am a good Developer' },
        { id: '6', title: 'All', description: 'I am a good Developer' },
    ],
    initialWorkThunkState: {
        loading: false,
        message: "",
        error: "",
        data: [],
        filteredData: [],
    } as IWorkProps
}