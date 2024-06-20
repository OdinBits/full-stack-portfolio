import { IExperience } from "../interfaces/IExperience";
import Skills from "../../sections/Experience/components/Skills";
import ExperienceMobile from "../../sections/Experience/components/ExperienceResponsive";


export const ExperienceType = {

    skillHeaders: [
        {
            id: '1',
            role: 'Front-end',
            code: [
                {
                    title: 'Tech Stack',
                    points: [
                        'Single-page Applications (SPA)',
                        'React (https://reactjs.org/)',
                        'Redux (https://redux.js.org/)',
                        'TypeScript (https://www.typescriptlang.org/)',
                        'Sass (https://sass-lang.com/)',
                        'Material UI (https://material-ui.com/)',
                        'Next.js',
                    ],
                },
                {
                    title: 'HTML & CSS',
                    points: [
                        'Responsive websites',
                        'CSS-in-JS (Emotion, styled-components, Material UI)',
                        'Sass (https://sass-lang.com/)',
                        'Material UI (https://material-ui.com/)',
                        'Bootstrap (https://getbootstrap.com/)',
                        'ES6',
                    ],
                },
            ],
        },
        {
            id: '2',
            role: 'Back-end',
            code: [
                {
                    title: 'Server Side',
                    points: [
                        'Node.js',
                        'Express.js',
                        'GraphQL',
                        'REST APIs',
                        'Database Management',
                        'ASP.NET Core API',
                    ],
                },
                {
                    title: 'DevOps',
                    points: [
                        'Docker',
                        'Kubernetes',
                        'CI/CD Pipelines',
                        'AWS',
                        'Azure',
                    ],
                },
            ],
        },
        {
            id: '3',
            role: 'Others',
            code: [
                {
                    title: 'Additional Skills',
                    points: [
                        'Chrome Extensions',
                        'Headless CMS (Sanity)',
                        'Designing RESTful APIs',
                    ],
                },
                {
                    title: 'Soft Skills',
                    points: [
                        'Team Collaboration',
                        'Project Management',
                        'Effective Communication',
                    ],
                },
            ],
        },
    ],

    routeMenu: [
        {id: 1, name:'Skills', component: Skills},
        {id: 2, name:'Experience', component: ExperienceMobile}
    ],

        expThunkState: {
            expLoading: false,
            expMessage: "",
            expError: "" ,
            expData: undefined,
        } as IExperience.ThunkState
};
