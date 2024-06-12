import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { style } from './style';
import { format, parseISO } from 'date-fns';
import { ISkillsExperience } from '../../../../shared/interfaces/ISkillsExperience';

const ExperienceContent: React.FC<ISkillsExperience.ExpComponent> = ({ selectedExp }) => {

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
                    {selectedExp.detailDesc.map((desc: any) => (
                        <React.Fragment key={`desc-${desc.subTitle}`}>
                            <Typography sx={style.subTitle}>{desc.subTitle}</Typography>
                            {desc.points.map((point: any) => (
                                <li key={`desc-point-${point}`} style={style.li}>
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
                {selectedExp.developmentTools?.map((tool: any) => (
                    <Typography key={`tools-${tool}`} sx={style.devToolsPoints}>{tool}</Typography>
                ))}
            </Box>
        </Stack>
    )
}

export default ExperienceContent
