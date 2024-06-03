import { Box, CardMedia } from '@mui/material';
import { style } from './style';
import { HeaderType } from '../../../../shared/types/HeaderType';

const SkillsStrip = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.content}>
                {HeaderType.skills.map((item) => (
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
