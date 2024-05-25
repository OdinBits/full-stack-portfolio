import React from 'react';
import { headerSkills } from '../../shared/types/HeaderSkills';
import headerStyle from './HeaderStyle';
import { Box } from '@mui/material';

const Skills = () => {
    return (
        <Box data-id='skills-container' sx={headerStyle.skillsContainer}>
            {headerSkills.map((skill) => (
                <Box data-id={`skill-item-${skill.id}`} key={`skill-${skill.id}`} style={{ ...headerStyle.skillItem, width: skill.weight, height: skill.height }}>
                    <Box data-id={`skill-item-image-${skill.id}`} component='img' src={skill.imgUrl} alt={skill.title} sx={headerStyle.skillItemImage} />
                </Box>
            ))}
        </Box>
    );
};

export default Skills;
