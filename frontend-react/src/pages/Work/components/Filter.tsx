import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { IWork } from '../../../shared/interfaces/IWork';
import style from '../style';

const Filter: React.FC<IWork.fiterProps> = ({ clickedButton, handleWorkFilter, filterList }) => {

    const getButtonStyles = (title: string) => ({
        ...style.workSkills.skillButtons,
        transform: clickedButton === title ? 'scale(1.05) translateY(-5px)' : 'none',
        paddingInline: clickedButton === title ? '10px' : '5px',
        backgroundColor: clickedButton === title ? '#035FB2' : 'inherit',
        color: clickedButton === title ? '#FFFF' : ''
    });

    // Check if filterList is defined and has at least one item with options
    const hasValidFilterList = Array.isArray(filterList) && filterList.length > 0 && filterList[0]?.options?.length > 0;

    // If no valid filterList is available, show a fallback message
    if (!hasValidFilterList) {
        return (
            <Grid data-id='work-filter-container' sx={style.workSkills.workFilterContainer}>
                <Typography variant="h6" color="textSecondary">
                    No filters available
                </Typography>
            </Grid>
        );
    }

    return (
        <Grid data-id='work-filter-container' sx={style.workSkills.workFilterContainer}>
            {/* Content */}
            {filterList[0].options.map((item: any, index: any) => (
                <Grid item key={`work-skills-${index}`} sx={{ width: 'fit-content' }}>
                    <Button
                        onClick={() => handleWorkFilter ? handleWorkFilter(item) : null}
                        sx={getButtonStyles(item)}
                    >
                        {item}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default Filter;
