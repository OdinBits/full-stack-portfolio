import Skills from "../../pages/SkillsExperience/components/Skills";

export const SkillsExperienceType = {
    skillHeaders: [
        {
            id: '1',
            role: 'Front-end',
            code: [
                {
                    title: 'Technologies',
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
                    title: 'Server Technologies',
                    points: [
                        'Node.js',
                        'Express.js',
                        'GraphQL',
                        'REST APIs',
                        'Database Management',
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
        { id: '2', name: 'EXPERIIENCE' ,path:'EXPERIENCE', element: Skills},
        { id: '3', name: 'PROJECTS' , path:'PROJECTS', element: Skills},
    ],

};
