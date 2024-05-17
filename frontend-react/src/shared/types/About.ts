import assets from "../constants/images";
import { IAboutImages } from "../interfaces/IAboutImages";


export const about = [
    {id:'1', title: 'Web Development', description:'I am a good Developer', imgUrl: assets.about01},
    {id:'2', title: 'Web Design', description:'I am a good Developer', imgUrl:assets.about02},
    {id:'3', title: 'UI/UX',description:'I am a good Developer', imgUrl:assets.about03},
    {id:'4', title: 'Web Animation', description:'I am a good Developer', imgUrl:assets.about04},
];

export const initialAboutThunkState: IAboutImages = {
    loading: false,
    message: "",
    error: "",
    data: undefined
}