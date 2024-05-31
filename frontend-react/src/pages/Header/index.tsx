import { Box } from '@mui/material';
import style from './style';
import { AppWrap } from '../../wrapper';
import Intro from './components/Intro';
import Roles from './components/Roles';
import PortfolioImage from './components/PortfolioImage';
import Skills from './components/Skills';


const Header = () => {
    return (
        <Box id='Home' sx={style.headerSection}>
            {/* Main content container */}
            <Box data-id='header-content' sx={style.headerContent}>
                {/* Introduction container */}
                <Box data-id='intro-container' sx={style.introContainer}>
                    {/* Greeting and name */}
                    <Intro />
                    {/* Roles */}
                    <Roles />
                </Box>
                {/* Portfolio images */}
                <PortfolioImage />
                {/* Skills icons*/}
                <Skills />
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Header, idName: 'Home'});
