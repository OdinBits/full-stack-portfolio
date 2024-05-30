import { Box, Grid, Skeleton } from '@mui/material';
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
    const [inView, setInView] = React.useState(false);
    const [tooltipOpen, setTooltipOpen] = React.useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[3].name, handleEnter, handleExit);
    const { data, loading } = useAppSelector((state) => state.skills);

    useEffect(() => {
        dispatch(skillsThunk());
    }, [dispatch]);


    // Assuming data.skills and data.experiences are arrays
    const skillsComponents = data?.skills?.map((skill: any, index: number) => (
        <SkillsItems key={index} skill={skill} />
    ));

    const experiencesComponents = data?.experiences?.map((experience: any, index: number) => (
        <ExperienceItems key={index} experience={experience} />
    ));

    console.log('data from skills exp', data)

    return (
        <Grid
            id='Skills'
            container
            sx={style.skillsContainer}
            ref={sectionRef}
        >
            <Box
                data-id='skill-content'
                sx={style.skillsContent}
            >
                <TextBuilder
                    data={skillsConfig.skillIntroText}
                    defaultStyle={style.introMessage}
                    highLightStyle={undefined}
                />
                <Box
                    sx={{ width: '100%', display: 'flex' }}
                >
                    <Grid
                        item
                        sx={{
                            width: '50%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: { xs: "column", md: "row" },
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {skillsComponents}
                    </Grid>
                    <Grid item sx={{ marginLeft: { md: '20px' }, width: { xs: '50%', md: '50%', height: '100%' } }}>
                        {experiencesComponents}
                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
};

export default AppWrap({ Component: SkillsExperience, idName: 'Skills', showCopyright: false });
