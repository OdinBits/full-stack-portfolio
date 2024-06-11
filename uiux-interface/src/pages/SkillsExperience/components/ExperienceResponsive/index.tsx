import React, { useState } from 'react';
import { Box } from '@mui/material';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
import ExperienceContent from '../ExperienceContent/ExperienceContent';
import CustomDropdown from '../ExperienceMobileView';
import ExperienceDesktopView from '../ExperienceDesktopView';

const ExperienceResponsive = () => {
    const expPoints = SkillsExperienceType.expPorps;
    const validExpPoints = Array.isArray(expPoints) ? expPoints : [];

    const [selectedExp, setSelectedExp] = useState(validExpPoints[0] || {});

    const handleImageClick = (exp: any) => {
        setSelectedExp(exp);
    };

    return (
        <Box id="Experience container">
            <Box
                data-id="content"
                sx={{
                    ...style.content,
                    '& > [data-id="option div"]': {
                        transition: 'all 0.5s ease',
                    },
                    '& > [data-id="exp info"]': {
                        transition: 'all 0.5s ease',
                        opacity: selectedExp ? 1 : 0,
                        transform: selectedExp ? 'translateY(0)' : 'translateY(20px)',
                    },
                }}
            >
                <ExperienceDesktopView
                    validExpPoints={validExpPoints}
                    selectedExp={selectedExp}
                    handleImageClick={handleImageClick}
                />

                <CustomDropdown />

            </Box>
        </Box>
    );
};

export default ExperienceResponsive;
