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

    const { data } = useAppSelector((state) => state.person)

    return (
        <Box id='Home' sx={style.headerSection}>
            {/* Main content container */}
            <Box data-id='header-content' sx={style.headerContent}>
                {/* Introduction container */}
                <Box data-id='intro-container' sx={style.introContainer}>
                    {/* Greeting and name */}
                    <Intro text={data[0]?.name} />
                    {/* Roles */}
                    <Roles text={data[0]?.title} />
                </Box>
                {/* Portfolio images */}
                <PortfolioImage photo={data[0]?.photo} />
                {/* Skills icons*/}
                <Skills />
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Header, idName: 'Home'});
