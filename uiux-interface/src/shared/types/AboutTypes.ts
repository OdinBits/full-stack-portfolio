import { ConstImg } from "../constants/image";
import { IAbout } from "../interfaces/IAbout";


export const AboutTypes = {

    themeText: {
        firstParagraph:"I am a full-stack developer. I have a strong background in computer science and software engineering. I have worked on projects focusing on using modern web technologies. I create quality,clean,detailed and maintainable web applications, ready to scale for a range of vast users. I can help you deliver a seamless and engaging experience to your users.Background in computer science and ability as a full-stack developer (front-end and back-end) allow me to create everything from small business websites to custom web applications.",
        secondParagraph:"A full stack developer has the functional knowledge and ability to take a concept and turn it into a finished product. A full stack developer should have knowledge in front end and back end development. Front end developers build the visible parts of applications that users see and interact with. Back end developers on the other hand, are responsible for building the parts the user does not see, which include core computational logic, server and database." 
    },
    aboutSkills: [
        { id: '1', title: 'Web Development', description: 'I am a good Developer', imgUrl: ConstImg.about01 },
        { id: '2', title: 'Web Design', description: 'I am a good Developer', imgUrl: ConstImg.about02 },
        { id: '3', title: 'UI/UX', description: 'I am a good Developer', imgUrl: ConstImg.about03 },
        { id: '4', title: 'Web Animation', description: 'I am a good Developer', imgUrl: ConstImg.about04 },
    ],
    ThunkState: {
        loading: false,
        message: "",
        error: "",
        data: undefined
    } as IAbout.ThunkState
}