import { Box, Typography } from '@mui/material';
import assets from '../../shared/constants/images';
import { headerSkills } from '../../shared/types/HeaderSkills';
import headerStyle from './HeaderStyle';
import CenteredDiv from '../../components/Tools/CenteredDiv';

const Header = () => {
    return (
        <CenteredDiv id='header-container' sx={headerStyle.headerContainer}>
            {/* Main content container */}
            <CenteredDiv data-id='header-content' sx={headerStyle.headerContent}>
                {/* Introduction container */}
                <CenteredDiv data-id='intro-container' sx={headerStyle.introContainer}>
                    {/* Greeting and name */}
                    <CenteredDiv data-id='intro-text' sx={headerStyle.introText}>
                        <Typography>👋</Typography>
                        <Box data-id='intro' style={{ marginLeft: 20 }}>
                            <Typography variant='subtitle2' data-id='intro-subtitle'>Hello, I am</Typography>
                            <Typography variant='h5' data-id='intro-title'>Micael</Typography>
                        </Box>
                    </CenteredDiv>
                    {/* Roles */}
                    <CenteredDiv data-id='intro-role' sx={headerStyle.introBox}>
                        <Typography sx={{ margin: '3px' }}>Freelancer</Typography>
                        <Typography sx={{ margin: '3px' }}>Web Developer</Typography>
                    </CenteredDiv>
                </CenteredDiv>
                {/* Portfolio images */}
                <CenteredDiv data-id='portfolio-images' sx={headerStyle.introRole}>
                    <Box data-id='profile-image' sx={headerStyle.portfolioImages} component='img' alt='portfolioImg' src={assets.profile} />
                    <Box data-id='circle-image' sx={headerStyle.circleImage} component='img' alt='portfolioCircle' src={assets.circle} />
                </CenteredDiv>
                {/* Skills */}
                <CenteredDiv data-id='skills-container' sx={headerStyle.skillsContainer}>
                    {headerSkills.map((img, index) => (
                        <CenteredDiv data-id={`skill-item-${index}`} key={`circle-${index}`} style={{ ...headerStyle.skillItem, width: img.weight, height: img.height }}>
                            <Box data-id={`skill-item-image-${index}`} component='img' src={img.imgUrl} alt={img.title} sx={headerStyle.skillItemImage} />
                        </CenteredDiv>
                    ))}
                </CenteredDiv>
            </CenteredDiv>
        </CenteredDiv>
    )
}

export default Header
