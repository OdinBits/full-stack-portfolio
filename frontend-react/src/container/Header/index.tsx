import { Box } from '@mui/material';
import STYLHeader from './STYLHeader';
import { AppWrap } from '../../wrapper';
import COMPPortfolioImage from './COMPPortfolioImage';
import COMPRoles from './COMPRoles';
import COMPSkills from './COMPSkills';
import COMPIntro from './COMPIntro';


const Header = () => {
    return (
        <Box id='HOME' sx={STYLHeader.headerSection}>
            {/* Main content container */}
            <Box data-id='header-content' sx={STYLHeader.headerContent}>
                {/* Introduction container */}
                <Box data-id='intro-container' sx={STYLHeader.introContainer}>
                    {/* Greeting and name */}
                    <COMPIntro />
                    {/* Roles */}
                    <COMPRoles />
                </Box>
                {/* Portfolio images */}
                <COMPPortfolioImage />
                {/* Skills icons*/}
                <COMPSkills />
            </Box>
        </Box>
    )
}

export default AppWrap({ Component: Header, idName: 'HOME', showCopyright: false });
