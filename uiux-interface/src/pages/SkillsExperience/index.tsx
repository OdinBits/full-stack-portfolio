import { Box } from '@mui/material';
import { SkillsExperienceType } from '../../shared/types/SkillsExperienceTypes';
import ToggleMenuDesktop from './components/ToggleMenuDesktop';
import ToggleMenuMobile from './components/ToggleMenuMobile';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
import { setActiveSection, updateHistory } from '../../store/slices/navigationSlice';
import SkillsExperienceRoutes from '../../routes/SkillsExperience';
import AppWrap from '../../wrapper/AppWrap';
import { NavTypes } from '../../shared/types/NavTypes';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const SkillsExperience = () => {
    const { ref, inView } = useInView({
        threshold: 0.6, 
    });
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (inView) {
            dispatch(setActiveSection(NavTypes.navItems[1].name));
        }
    }, [inView, dispatch]);
    
    const { isActive } = useAppSelector(state => state.navLinkStates);
    
    
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const activeLink = SkillsExperienceType.routeMenu[isActive];
        const path = activeLink ? activeLink.path : '/';
        
        navigate(path);

        dispatch(updateHistory(path));
        }, [navigate, isActive, dispatch]);


        
        

    return (
        <Box ref={ref} id='SKILLS' bgcolor='#f2f2f2' padding='80px 0px' minHeight='100vh'>
            <ToggleMenuDesktop isActive={isActive}/>
            <ToggleMenuMobile isActive={isActive}/>
            <SkillsExperienceRoutes/>
        </Box>
    )
}

export default AppWrap({ Component: SkillsExperience, idName: 'SKILLS'});
