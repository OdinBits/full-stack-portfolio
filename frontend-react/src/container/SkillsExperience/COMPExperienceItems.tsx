// ExperienceItem.tsx
import { memo } from 'react';
import { Box, Grid, Typography, Tooltip } from '@mui/material';
import { ISkills } from '../../shared/interfaces/ISkills';


const COMPExperienceItem: React.FC<ISkills.APIResExperience> = ({ experience }) => (
    <Grid item sx={{ width: '100%', display: 'flex', textAlign: 'center', height: '100%' }}>
        <Typography sx={{ width: '50px', marginRight: '20px', padding: '5px' }}>
            {experience?.year}
        </Typography>
        <Box>
            {experience?.works.map((work) => (
                <Box key={work.name} sx={{ textAlign: 'left', padding: '5px', width: '100%' }}>
                    <Typography variant="h5">{work.name}</Typography>
                    <Tooltip title={work.desc}>
                        <Typography variant="subtitle2">{work.company}</Typography>
                    </Tooltip>
                </Box>
            ))}
        </Box>
    </Grid>
);

export default memo(COMPExperienceItem);
