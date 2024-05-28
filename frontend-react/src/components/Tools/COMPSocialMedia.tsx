import { Box } from '@mui/material';
import { TSocialAttributes } from '../../shared/types/TSocialAttributes';
import STYLTools from './STYLTools';

const COMPSocialMedia = () => (
    <Box
        id='social-media'
        sx={STYLTools.socialMedia.container}
    >
        {TSocialAttributes.media.map((item) => (
            <Box key={item.id} sx={STYLTools.socialMedia.items}>
                <item.item /> 
            </Box>
        ))}
    </Box>
);

export default COMPSocialMedia;
