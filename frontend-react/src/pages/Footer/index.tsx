import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { AppWrap } from '../../wrapper';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import NavbarTypes from '../../shared/types/NavbarTypes';
import { useState } from 'react';
import { TextBuilder } from '../../components';
import { footerConfig } from '../../shared/config/footerConfig';
import style from './style';
import Contacts from './components/Contacts';

const Footer = () => {
    const [inView, setInView] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const handleEnter = () => setInView(true);
    const handleExit = () => setInView(false);

    const sectionRef = useIntersectionObserver(NavbarTypes.navPages[2].name, handleEnter, handleExit);


    return (

        <Box
            ref={sectionRef}
            id='Contact'
            sx={style.main.container}
        >
            <Box 
            data-id='content'
            sx={style.main.content}
            >
                <TextBuilder
                    data={footerConfig.text}
                    defaultStyle={style.main.text}
                    highLightStyle={undefined}
                />

                <Contacts/>
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Footer, idName: 'Contact', showCopyright: true })