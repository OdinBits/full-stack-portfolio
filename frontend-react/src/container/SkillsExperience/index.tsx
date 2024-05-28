// SkillsItems.tsx
import { Box, Grid } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
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
    const [inView, setInView] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);

    const handleViewportChange = (desktop: boolean) => setIsDesktop(desktop);

    const sectionRef = useIntersectionObserver(TNavbar.navPages[3].name, handleEnter, handleExit, handleViewportChange);

    useEffect(() => {
        dispatch(THKSkills());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.skills);

    const skillsComponents = useMemo(() => (
        data?.skills?.map((skill: any) => (
            <COMPSkillsItems key={skill.name} skill={skill} />
        ))
    ), [data?.skills]);

    const experiencesComponents = useMemo(() => (
        data?.experiences?.map((experience: any, index: number) => (
            <COMPExperienceItems key={index} experience={experience} />
        ))
    ), [data?.experiences]);

    return (
        <Grid
            id='SKILLS'
            container
            sx={{
                ...STYLSkills.skillItems.skillsContainer,
                minHeight:'100vh'
            }}
            ref={sectionRef}
        >
            <Box
                data-id='skill-content'
                sx={STYLSkills.skillsContent}>
                <COMPVividTextBuilder
                    data={CFGSkills.skillIntroText}
                    defaultStyle={STYLSkills.introMessage}
                    highLightStyle={undefined}
                />
                <Box sx={{ display: {md:'flex'}, justifyContent: 'space-between', width: '100%' }}>
                    <Grid item sx={{display:'flex',height:'100%',flexWrap:'wrap',marginRight:{md:'20px'},alignItems:'center',width:{xs:'100%',md:'50%'}}}>
                        {skillsComponents}
                    </Grid>
                    <Grid item sx={{marginLeft:{md:'20px'},width:{xs:'100%',md:'50%',height:'100%'}}}>
                        {experiencesComponents}
                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
};

export default AppWrap({Component:SkillsExperience, idName: 'SKILLS', showCopyright: false});
