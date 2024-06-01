import { Box } from '@mui/material';
import style from './style';
import { AppWrap } from '../../wrapper';
import Intro from './components/Intro';
import Roles from './components/Roles';
import PortfolioImage from './components/PortfolioImage';
import Skills from './components/Skills';
import { useEffect } from 'react';
import { personThunk, useAppDispatch, useAppSelector } from '../../store';


const Header = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(personThunk());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.person);
    const person = data[0] || {};

    return (
        <Box id='Home' sx={style.headerSection}>
            {/* Main content container */}
            <Box data-id='header-content' sx={style.headerContent}>
                {/* Introduction container */}
                <Box data-id='intro-container' sx={style.introContainer}>
                    {/* Greeting and name */}
                    <Intro text={person.name || 'None'} />
                    {/* Roles */}
                    <Roles text={person.title || 'None'} />
                </Box>
                {/* Portfolio images */}
                <PortfolioImage photo={person.photo || null} />
                {/* Skills icons*/}
                <Skills />
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Header, idName: 'Home' });
