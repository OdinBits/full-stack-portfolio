import { Box, CardMedia } from '@mui/material';
import { style } from './style';
import { HeaderTypes } from '../../../../shared/types/HeaderTypes';

const SkillsStrip: React.FC = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.content}>
                {HeaderTypes.skills.map((item) => (
                    <CardMedia 
                        key={item.id} 
                        component="img" 
                        alt={item.name} 
                        src={item.src} 
                        sx={style.cardMedia}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default SkillsStrip;
