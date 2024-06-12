import React from 'react';
import { Box } from '@mui/material';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
import CustomDropdown from '../ExperienceMobileView';
import ExperienceDesktopView from '../ExperienceDesktopView';
import { useAppSelector } from '../../../../store';


const ExperienceResponsive = () => {

    
        const {expData} = useAppSelector((state) => state.SkillsExp)

        const validExpPoints = expData ? expData.experiences : SkillsExperienceType.expProps;
    
        const [selectedExp, setSelectedExp] = React.useState(validExpPoints[0] || {});
    
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

                <CustomDropdown validExpPoints={validExpPoints}/>

            </Box>
        </Box>
    );
};

export default ExperienceResponsive;
