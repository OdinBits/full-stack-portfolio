// SkillItem.tsx
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ISkills } from '../../../shared/interfaces/ISkills';
import { urlFor } from '../../../shared/config/clientConfig';
import { MotionBox } from '../../../components';



const SkillItem: React.FC<ISkills.APIResSkills> = ({ skill }) => (
    <MotionBox
        id='items-motion'
        sx={{ width: '150px', marginBottom: '20px' }}
        motionProps={{
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
            whileHover: { scale: 1.1},
            transition: { duration: 0.5 },
        }}
    >
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Box
                component="img"
                src={urlFor(skill?.icon)}
                alt={skill?.name}
                sx={{ width: '30%', background: '#F3F5F7', height: '100%', borderRadius: '50%', padding: '20px' }}
            />
            <Typography variant="subtitle2">
                {skill?.name}
            </Typography>
        </Box>
    </MotionBox>


);

export default memo(SkillItem);
