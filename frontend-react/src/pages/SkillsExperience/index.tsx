import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import skillsThunk from '../../store/thunks/skillsThunk';
import NavbarTypes from '../../shared/types/NavbarTypes';
import style from './style';
import TextBuilder from '../../components/TextBuilder';
import { skillsConfig } from '../../shared/config/skillsConfig';
import { AppWrap } from '../../wrapper';
import SkillsItems from './components/SkillsItems';
import ExperienceItems from './components/ExperienceItems';

const SkillsExperience: React.FC = () => {

    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.skills);
    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[3].name);

    useEffect(() => {
        dispatch(skillsThunk());
    }, [dispatch]);

    const skillsComponents = data?.skills?.map((skill: any, index: number) => (
        <SkillsItems key={index} skill={skill} />
    ));

    const experiencesComponents = data?.experiences?.map((experience: any, index: number) => (
        <ExperienceItems key={index} experience={experience} />
    ));

    return (
        <Grid id='Skills' container sx={style.skillsContainer} ref={sectionRef}>
            {/* Content */}
            <Box data-id='skill-content' sx={style.skillsContent}>
                <TextBuilder
                    data={skillsConfig.skillIntroText}
                    defaultStyle={style.introMessage}
                    highLightStyle={undefined}
                />
                {/* All items container */}
                <Box data-id='all-items-container' sx={style.allItemsContainer}>
                    {/* All items content */}
                    <Grid item sx={style.allItemsContent}>
                        {skillsComponents}
                    </Grid>
                    <Grid item sx={style.expComponent}>
                        {experiencesComponents}
                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
};

export default AppWrap({ Component: SkillsExperience, idName: 'Skills' });
