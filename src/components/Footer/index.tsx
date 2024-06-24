import { Box, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { style } from './style';
import React from 'react';
import { useAppSelector } from '../../store';

const Footer: React.FC = () => {
    const { personData } = useAppSelector((state) => state.person);

    return (
        <Box id='FOOTER' sx={style.container}>
            {personData.map((person: any) => (
                <Box data-id='my-contacts' sx={style.contacts} key={`footer-link-${person.name}`}>
                    <Typography component='a' href={person.gitHub} sx={style.text}>
                        <GitHub width='100%' height='100%' />
                    </Typography>
                    <Typography component='a' href={person.linkedIn} sx={style.text}>
                        <LinkedIn width='100%' height='100%' />
                    </Typography>
                </Box>
            ))}
            <Box data-id='all-rights' sx={style.textBox}>
                &copy; 2024 Nishant Chavan. All rights reserved.
            </Box>
            <Box data-id='design-credit' sx={style.designCredit}>
                <Typography component='a' href='https://andrejgajdos.com/' sx={style.creditPoints}>
                    Design Inspiration
                </Typography>
                <br />
                <Typography component='a' href='https://creativecommons.org/licenses/by-nc/4.0/' sx={style.creditPoints}>
                    Licensed under a Creative Commons Attribution-NonCommercial 4.0 International License
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
