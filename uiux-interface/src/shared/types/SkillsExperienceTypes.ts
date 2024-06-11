
import ExperienceResponsive from "../../pages/SkillsExperience/components/ExperienceResponsive";
import Skills from "../../pages/SkillsExperience/components/Skills";
import { ConstImg } from "../constants/image";
import { ISkillsExperience } from "../interfaces/ISkillsExperience";

export const SkillsExperienceType = {
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
        // { id: '1', name: 'SKILLS' , path: '*', element: Skills},
        { id: '1', name: 'SKILLS' , path:'SKILLS', element: Skills},
        { id: '2', name: 'EXPERIENCE' ,path:'EXPERIENCE', element: ExperienceResponsive},
        // { id: '2', name: 'EXPERIENCE' ,path:'EXPERIENCE', element: ExperienceResponsive},
    ],

    expProps : [
        {id:'1',
            img:ConstImg.companyLogo,
            Title:'Full-stack developer | PowerTools developer | Tableau developer', 
            workData: 'May 2023 - May 2024', 
            detailDesc:[
                {subTitle:'Full-stack developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
                {subTitle:'PowerTools developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
                {subTitle:'Tableau developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        ], 
        developmentTools:[
            'React',
            'Redux',
            'Tablue',
            'PowerPlatform'
        ]},
        // {id:'2',
        //     img:ConstImg.companyLogo,
        //     Title:'2 Full-stack developer | PowerTools developer | Tableau developer', 
        //     workData: 'May 2023 - May 2024', 
        //     detailDesc:[
        //         {subTitle:'Full-stack developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        //         {subTitle:'PowerTools developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        //         {subTitle:'Tableau developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        // ], 
        // developmentTools:[
        //     'React',
        //     'Redux',
        //     'Tablue',
        //     'PowerPlatform'
        // ]},
        // {id:'3',
        //     img:ConstImg.companyLogo,
        //     Title:'3 Full-stack developer | PowerTools developer | Tableau developer', 
        //     workData: 'May 2023 - May 2024', 
        //     detailDesc:[
        //         {subTitle:'Full-stack developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        //         {subTitle:'PowerTools developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        //         {subTitle:'Tableau developer',points:['I worked as react dev','develped responsive web designs','debugged syntax and logic erros']},
        // ], 
        // developmentTools:[
        //     'React',
        //     'Redux',
        //     'Tablue',
        //     'PowerPlatform'
        // ]},
        // {id:'2',
        //     img:ConstImg.logo,
        //     Title:'2 full-stack developer | PowerTools developer | Tableau developer', 
        //     workData: 'May 2023 - May 2024', 
        //     description:[
        //         {point1:'I Started my career a as full stack dev'},
        //         {point1:'I Started my career a as full stack dev'},
        //         {point1:'I Started my career a as full stack dev'},
        // ], 
        // developmentTools:['React','Redux','Tablue','PowerPlatform']}
    ],
        expThunkState: {
            expLoading: false,
            expMessage: "",
            expError: "" ,
            expData: undefined,
        } as ISkillsExperience.ThunkState
};
