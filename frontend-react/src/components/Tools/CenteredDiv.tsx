import React from 'react';
import { styled } from '@mui/system';
import ICenteredDiv from '../../shared/interfaces/ICenteredDiv';

const CenteredDivStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const CenteredDiv = ({ sx, children, ...props }: ICenteredDiv) => {
    return (
        <CenteredDivStyle sx={sx} {...props}>
            {children}
        </CenteredDivStyle>
    );
}

export default CenteredDiv;
