import { Box } from '@mui/material';
import headerStyle from './HeaderStyle';
import assets from '../../shared/constants/images';

const PortfolioImage = () => {
    return (
        <Box data-id='portfolio-image' sx={headerStyle.portfolioImage}>
        <Box data-id='portfolio-content'>
            <Box data-id='profile-image' sx={headerStyle.portfolioImages} component='img' alt='portfolioImg' src={assets.profile} />
            <Box data-id='circle-image' sx={headerStyle.circleImage} component='img' alt='portfolioCircle' src={assets.circle} />
        </Box>
    </Box>
    )
}

export default PortfolioImage;
