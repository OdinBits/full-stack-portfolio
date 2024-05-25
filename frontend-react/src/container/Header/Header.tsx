import { Box } from '@mui/material';
import headerStyle from './HeaderStyle';
import { AppWrap } from '../../wrapper';
import PortfolioImage from './PortfolioImage';
import Roles from './Roles';
import Skills from './Skills';
import Intro from './Intro';


const Header = () => {
    return (
        <Box id='HOME' sx={headerStyle.headerSection}>
            {/* Main content container */}
            <Box data-id='header-content' sx={headerStyle.headerContent}>
                {/* Introduction container */}
                <Box data-id='intro-container' sx={headerStyle.introContainer}>
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

export default AppWrap({ Component: Header, idName: 'HOME', showCopyright: false });
