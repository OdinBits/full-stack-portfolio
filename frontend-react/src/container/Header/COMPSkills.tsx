import { THeader } from '../../shared/types/THeader';
import STYLHeader from './STYLHeader';
import { Box } from '@mui/material';

const Skills = () => {
    return (
        <Box data-id='skills-container' sx={STYLHeader.skillsContainer}>
            {THeader.map((skill) => (
                <Box data-id={`skill-item-${skill.id}`} key={`skill-${skill.id}`} style={{ ...STYLHeader.skillItem, width: skill.weight, height: skill.height }}>
                    <Box data-id={`skill-item-image-${skill.id}`} component='img' src={skill.imgUrl} alt={skill.title} sx={STYLHeader.skillItemImage} />
                </Box>
            ))}
        </Box>
    );
};

export default Skills;
