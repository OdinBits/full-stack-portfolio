import React from 'react';
import { Button, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { urlFor } from '../../shared/config/clientConfig';
import { useAppDispatch, useAppSelector } from '../../store';
import { ProjectTypes } from '../../shared/types/ProjectTypes';
import workThunk from '../../store/thunks/workThunk';
import AppWrap from '../../wrapper/AppWrap';
import { setActiveSection } from '../../store/slices/navigationSlice';
import { NavTypes } from '../../shared/types/NavTypes';
import './style.scss';
import { GitHub } from '@mui/icons-material';

const colors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-indigo-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-orange-100',
    'bg-teal-100',
    'bg-cyan-100',
    'bg-lime-100',
    'bg-emerald-100',
    'bg-fuchsia-100',
    'bg-rose-100'
];

const Projects: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    const navigate = useNavigate();

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(workThunk());

        if (inView) {
            dispatch(setActiveSection(NavTypes.navItems[2].name));
        }
    }, [dispatch, inView]);

    const { projData } = useAppSelector((state) => state.project);

    const validData = projData?.works || ProjectTypes?.projectSkillsDefault;

    const limitedProjects = validData.slice(0, 3);

    return (
        <section ref={ref} id='Projects' className='project-container'>
            {/* Content */}
            <div className='project-content'>
                {/* Title */}
                <Typography className='project-Title'> Projects </Typography>
                {limitedProjects?.map((item: any) => (
                    <div key={`projects-${item?.title}`} className='project-data-container'>
                        {/* Image Container */}
                        <div className='img-container'>
                            <img
                                className={`project-img ${item?.isConfidential ? 'blur-lg' : 'hover:blur-lg'}`}
                                alt={item?.title}
                                src={urlFor(item?.imgUrl)}
                            />
                            {item?.isConfidential ? (
                                <div className='confidential-container absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                                    <Typography className='confidential-text text-white'>Confidential Project</Typography>
                                </div>
                            ) : (
                                <div className='confidential-container absolute inset-0 flex items-center justify-center bg-black opacity-0  hover:opacity-100 bg-opacity-0 hover:bg-opacity-50 transition duration-300'>
                                    <a  href={item?.codeLink} className='confidential-text'>
                                        <GitHub sx={{fontSize:{xs:'50px',md:'80px'}}} className='text-white transform  transition duration-300 hover:scale-125 bg-gray-700 hover:bg-blue-500 rounded-full p-2' />
                                    </a>
                                </div>
                            )}
                        </div>
                        {/* Description container */}
                        <div className='description-container' >
                            {/* Title */}
                            <Typography className='text-[24px] text-gray-800'>{item?.title}</Typography>
                            {/* Description */}
                            <Typography className='text-gray-700 text-[16px]'>{item?.description}</Typography>
                            {/* Development Tools Container */}
                            <div className='dev-tools-box'>
                                {/* Title */}
                                <div className='dev-tools-title'>
                                    <Typography > DEVELOPMENT TOOLS : </Typography>
                                </div>
                                {/* Points Box */}
                                <ul className='ul-project-desc-container'>
                                    {item?.bulletPoints?.map((points: any) => (
                                        <li
                                            key={`points-${points}`}
                                            className={`${getRandomColor()} rounded-lg w-fit py-2 px-2`}
                                        >
                                            <Typography className='text-gray-700'>{points}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                {!item?.isConfidential && (
                                    <a
                                        href={item?.codeLink}
                                        className='mt-5 pl-4 font-mono md:hidden text-md text-coral-blue transform transition-transform duration-300 hover:scale-105'
                                    >
                                        Code-Link...
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Button onClick={() => navigate('/all-projects')} className='w-full py-20 px-24 text-2xl'>
                Show More ...
            </Button>
        </section>
    );
};

export default AppWrap({ Component: Projects, idName: 'Projects' });
