import { Box, Grid, Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import THKSkills from '../../store/thunks/THKSkills';
import TNavbar from '../../shared/types/TNavbar';
import STYLSkills from './STYLSkills';
import COMPSkillsItems from './COMPSkillsItems';
import COMPExperienceItems from './COMPExperienceItems';
import COMPVividTextBuilder from '../../components/TextBuilder/COMPVividTextBuilder';
import { CFGSkills } from '../../shared/config/CFGSkills';
import { AppWrap } from '../../wrapper';

const SkillsExperience: React.FC = () => {
    const dispatch = useAppDispatch();
    const [inView, setInView] = React.useState(false);
    const [tooltipOpen, setTooltipOpen] = React.useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);

    const sectionRef = useIntersectionObserver(TNavbar.navPages[3].name, handleEnter, handleExit);
    const { data, loading } = useAppSelector((state) => state.skills);

    useEffect(() => {
        dispatch(THKSkills());
    }, [dispatch]);


    // Assuming data.skills and data.experiences are arrays
    const skillsComponents = data?.skills?.map((skill: any, index: number) => (
        <COMPSkillsItems key={index} skill={skill} />
    ));

    const experiencesComponents = data?.experiences?.map((experience: any, index: number) => (
        <COMPExperienceItems key={index} experience={experience} />
    ));

    console.log('data from skills exp', data)

    return (
        <Grid
            id='SKILLS'
            container
            sx={STYLSkills.skillsContainer}
            ref={sectionRef}
        >
            <Box
                data-id='skill-content'
                sx={STYLSkills.skillsContent}
            >
                <COMPVividTextBuilder
                    data={CFGSkills.skillIntroText}
                    defaultStyle={STYLSkills.introMessage}
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

export default AppWrap({ Component: SkillsExperience, idName: 'SKILLS', showCopyright: false });
