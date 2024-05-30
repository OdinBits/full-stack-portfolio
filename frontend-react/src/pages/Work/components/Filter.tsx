import React from 'react';
import { Box, Button } from '@mui/material';
import { IWork } from '../../../shared/interfaces/IWork';
import style from '../style';
import { WorkTypes } from '../../../shared/types/WorkTypes';

const Filter: React.FC<IWork.fiterProps> = ({ clickedButton, handleWorkFilter }) => {

    const getButtonStyles = (title: string) => ({
        ...style.workSkills.skillButtons,
        transform: clickedButton === title ? 'scale(1.05) translateY(-5px)' : 'none',
        paddingInline: clickedButton === title ? '10px' : '5px',
        backgroundColor: clickedButton === title ? '#035FB2' : 'inherit',
        color: clickedButton === title ? '#FFFF' : ''
    });

    return (
        <Box
            data-id='work-filter-container'
            sx={style.workSkills.workFilterContainer}
        >
            {WorkTypes.workSkills.map((item, index) => (
                <Button
                    key={`work-skills-${item.id}`}
                    onClick={() => handleWorkFilter(item.title)}
                    sx={getButtonStyles(item.title)}
                >
                    {item.title}
                </Button>
            ))}
        </Box>
    );
};

export default Filter;
