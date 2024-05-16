import { Box, Typography } from '@mui/material';
import assets from '../../shared/constants/images';
import { headerSkills } from '../../shared/types/HeaderSkills';
import headerStyle from './HeaderStyle';
import CenteredDiv from '../../components/Tools/CenteredDiv';
import { headerConfig } from '../../shared/config/Header';

const Header = () => {
    return (
        <Box id='header-container' sx={headerStyle.headerContainer}>
            {/* Main content container */}
            <Box data-id='header-content' sx={headerStyle.headerContent}>
                {/* Introduction container */}
                <Box data-id='intro-container' sx={headerStyle.introContainer}>
                    {/* Greeting and name */}
                    <Box data-id='intro-text' sx={headerStyle.introText}>
                        <Typography>{headerConfig.headerText.greeting}</Typography>
                        <Box data-id='intro' style={headerStyle.intro}>
                            <Typography variant='subtitle2' data-id='intro-subtitle'>{headerConfig.headerText.introSubtitle}</Typography>
                            <Typography variant='h5' data-id='intro-title'>{headerConfig.headerText.introTitle}</Typography>
                        </Box>
                    </Box>
                    {/* Roles */}
                    <Box data-id='intro-role' sx={headerStyle.introBox}>
                        {headerConfig.headerText.roles.map((role) => (
                            <Typography key={role.id} sx={headerStyle.introRoleText}>{role.name}</Typography>
                        ))}
                    </Box>
                </Box>
                {/* Portfolio images */}
                <Box data-id='portfolio-images' sx={headerStyle.introRole}>
                    <Box data-id='profile-image' sx={headerStyle.portfolioImages} component='img' alt='portfolioImg' src={assets.profile} />
                    <Box data-id='circle-image' sx={headerStyle.circleImage} component='img' alt='portfolioCircle' src={assets.circle} />
                </Box>
                {/* Skills icons*/}
                <Box data-id='skills-container' sx={headerStyle.skillsContainer}>
                    {headerSkills.map((skill) => (
                        <Box data-id={`skill-item-${skill.id}`} key={skill.id} style={{ ...headerStyle.skillItem, width: skill.weight, height: skill.height }}>
                            <Box data-id={`skill-item-image-${skill.id}`} component='img' src={skill.imgUrl} alt={skill.title} sx={headerStyle.skillItemImage} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
        // <CenteredDiv id='header-container' sx={headerStyle.headerContainer}>
        //     {/* Main content container */}
        //     <Box data-id='header-content' sx={headerStyle.headerContent}>
        //         {/* Introduction container */}
        //         <Box data-id='intro-container' sx={headerStyle.introContainer}>
        //             {/* Greeting and name */}
        //             <CenteredDiv data-id='intro-text' sx={headerStyle.introText}>
        //                 <Typography>{headerConfig.headerText.greeting}</Typography>
        //                 <Box data-id='intro' style={headerStyle.intro}>
        //                     <Typography variant='subtitle2' data-id='intro-subtitle'>{headerConfig.headerText.introSubtitle}</Typography>
        //                     <Typography variant='h5' data-id='intro-title'>{headerConfig.headerText.introTitle}</Typography>
        //                 </Box>
        //             </CenteredDiv>
        //             {/* Roles */}
        //             <CenteredDiv data-id='intro-role' sx={headerStyle.introBox}>
        //                 {headerConfig.headerText.roles.map((role) => (
        //                     <Typography key={role.id} sx={headerStyle.introRoleText}>{role.name}</Typography>
        //                 ))}
        //             </CenteredDiv>
        //         </Box>
        //         {/* Portfolio images */}
        //         <CenteredDiv data-id='portfolio-images' sx={headerStyle.introRole}>
        //             <Box data-id='profile-image' sx={headerStyle.portfolioImages} component='img' alt='portfolioImg' src={assets.profile} />
        //             <Box data-id='circle-image' sx={headerStyle.circleImage} component='img' alt='portfolioCircle' src={assets.circle} />
        //         </CenteredDiv>
        //         {/* Skills icons*/}
        //         <Box data-id='skills-container' sx={headerStyle.skillsContainer}>
        //             {headerSkills.map((skill) => (
        //                 <CenteredDiv data-id={`skill-item-${skill.id}`} key={skill.id} style={{ ...headerStyle.skillItem, width: skill.weight, height: skill.height }}>
        //                     <Box data-id={`skill-item-image-${skill.id}`} component='img' src={skill.imgUrl} alt={skill.title} sx={headerStyle.skillItemImage} />
        //                 </CenteredDiv>
        //             ))}
        //         </Box>
        //     </Box>
        // </CenteredDiv>
    )
}

export default Header
