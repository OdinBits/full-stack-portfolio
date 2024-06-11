import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { style } from './style';
import { format, parseISO } from 'date-fns';

const ExperienceContent = ({ selectedExp }: any) => {

    const formatDate = (dateString: string) => {
        const date = parseISO(dateString);
        return format(date, 'yyyy - MMM');
    };


    return (
        <Stack spacing={1.5} sx={style.expContainer}>
            <Typography sx={style.title}>{selectedExp.title}</Typography>
            <Typography sx={style.date}>{formatDate(selectedExp.startDate)} to {formatDate(selectedExp.endDate)}</Typography>
            {selectedExp.detailDesc ? (
                <ul>
                    {selectedExp.detailDesc.map((desc: any, index: any) => (
                        <React.Fragment key={index}>
                            <Typography sx={style.subTitle}>{desc.subTitle}</Typography>
                            {desc.points.map((point: any, pointIndex: any) => (
                                <li key={pointIndex} style={style.li}>
                                    <Typography variant="subtitle1" sx={style.description}>
                                        {point}
                                    </Typography>
                                </li>
                            ))}
                        </React.Fragment>
                    ))}
                </ul>
            ) : (
                <Typography variant="subtitle1" sx={style.description}>
                    {selectedExp.detailDesc.points}
                </Typography>
            )}
            <Box sx={style.devToolsContainer}>
                <Typography sx={style.devToolsText}>Development Tools :</Typography>
                {selectedExp.developmentTools && selectedExp.developmentTools.map((tool: any, index: any) => (
                    <Typography key={index} sx={style.devToolsPoints}>{tool}</Typography>
                ))}
            </Box>
        </Stack>
    )
}

export default ExperienceContent
