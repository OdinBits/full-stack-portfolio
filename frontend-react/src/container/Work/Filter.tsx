import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { work } from '../../shared/types/Work';
import workStyle from './WorkStyle';
import { useAppDispatch } from '../../store';
import { setFilterData } from '../../store/slices/workSlice';

const Filter = () => {
    const [clickedButton, setClickedButton] = useState<string>(''); 
    const dispatch = useAppDispatch();

    function handleWorkFilter(title: string): void {
        if (clickedButton === title) {
            setClickedButton('');
            dispatch(setFilterData(''));
        } else {
            setClickedButton(title);
            dispatch(setFilterData(title));
        }
    }

    const getButtonStyles = (title: string) => ({
        ...workStyle.workSkills.skillButtons,
        transform: clickedButton === title ? 'scale(1.05) translateY(-5px)' : 'none',
        paddingInline: clickedButton === title ? '10px' : '5px',
        backgroundColor: clickedButton === title ? '#035FB2' : 'inherit',
        color: clickedButton === title ? '#FFFF' : ''
    });

    return (
        <Box data-id='work-filter-container' sx={workStyle.workSkills.workFilterContainer}>
            {work.workSkills.map((item, index) => (
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
