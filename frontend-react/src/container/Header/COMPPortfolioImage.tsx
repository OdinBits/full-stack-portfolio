import { Box } from '@mui/material';
import STYLHeader from './STYLHeader';
import CONSTImages from '../../shared/constants/CONSTImages';

const PortfolioImage = () => {
    return (
        <Box data-id='portfolio-image' sx={STYLHeader.portfolioImage}>
            <Box data-id='portfolio-content' sx={{ display: 'flex',height:'fit-content',justifyContent:'center' }}>
                <Box data-id='profile-image' sx={STYLHeader.portfolioImages} component='img' alt='portfolioImg' src={CONSTImages.MyPhoto} />
                <Box data-id='circle-image' sx={STYLHeader.circleImage} component='img' alt='portfolioCircle' src={CONSTImages.circle} />
            </Box>
        </Box>
    )
}

export default PortfolioImage;
