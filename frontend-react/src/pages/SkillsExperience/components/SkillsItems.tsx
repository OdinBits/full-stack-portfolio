// SkillItem.tsx
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ISkills } from '../../../shared/interfaces/ISkills';
import { urlFor } from '../../../shared/config/clientConfig';



const SkillItem: React.FC<ISkills.APIResSkills> = ({ skill }) => (
    <Box sx={{width:'150px',marginBottom:'20px'}}>
        <Box sx={{width:'100%',textAlign:'center'}}>
            <Box
                component="img"
                src={urlFor(skill?.icon)}
                alt={skill?.name}
                sx={{ width: '30%',background:'#F3F5F7',height: '100%',borderRadius:'50%',padding:'20px' }}
            />
            <Typography variant="subtitle2">
                {skill?.name}
            </Typography>
        </Box>
    </Box>
);

export default memo(SkillItem);
