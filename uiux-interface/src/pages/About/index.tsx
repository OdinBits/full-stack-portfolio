import React from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import ThemeText from './components/ThemeText';
import Info from './components/Info';
import AbilityCard from './components/AbilityCard';
import TextBuilder from '../../components/TextBuilder/TextBuilder';
import { aboutConfig } from '../../shared/config/aboutConfig';
import { style } from './style';
import { NavTypes } from '../../shared/types/NavTypes';
import AppWrap from '../../wrapper/AppWrap';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../../store/slices/navigationSlice';

const About: React.FC = () => {
    
    const { ref, inView } = useInView({
        threshold: 0.6, 
    });
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (inView) {
            dispatch(setActiveSection(NavTypes.navItems[0].name));
        }
    }, [inView, dispatch]);

    const { data } = useAppSelector((state) => state.about);

    return (
        <Box ref={ref} id='ABOUT' sx={style.container}>
            <ThemeText />
            <TextBuilder
                data={aboutConfig.aboutIntroText}
                defaultStyle={style.acceptanceMessage}
                highLightStyle={style.acceptanceMsgColor}
            />
            <AbilityCard about={data} />
            <Info />
        </Box>
    );
};

export default AppWrap({ Component: About, idName: 'ABOUT' });
