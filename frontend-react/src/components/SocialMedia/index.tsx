import { Box } from '@mui/material';
import { SocialAttributesTypes } from '../../shared/types/SocialAttributesTypes';
import { style } from './style';

const SocialMedia = () => (
    <Box
        id='social-media'
        sx={style.container}
    >
        {SocialAttributesTypes.media.map((item) => (
            <Box key={item.id} sx={style.items}>
                <item.item /> 
            </Box>
        ))}
    </Box>
);

export default SocialMedia;
