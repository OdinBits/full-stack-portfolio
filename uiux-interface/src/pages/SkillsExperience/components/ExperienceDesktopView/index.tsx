import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';

const ExperienceDesktopView = () => {
    const expPoints = SkillsExperienceType.expPorps;
    const validExpPoints = Array.isArray(expPoints) ? expPoints : [];

    const [selectedExp, setSelectedExp] = useState(validExpPoints[0] || {});

    const handleImageClick = (exp:any) => {
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
                <Box data-id="option div" sx={style.optionDiv}>
                    {validExpPoints.map((item, index) => {
                        const isSelected = item === selectedExp;
                        return (
                            <React.Fragment key={index}>
                                <Box
                                    data-id="box img"
                                    sx={style.imgBox}
                                    onClick={() => handleImageClick(item)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Box component="img" src={item.img} sx={style.img} />
                                </Box>
                                <Box
                                    data-id="indicator"
                                    sx={{
                                        ...style.indicator,
                                        background: isSelected ? 'linear-gradient(to right, #a0c4ff, #1e3a8a)' : 'transparent'
                                    }}
                                />
                            </React.Fragment>
                        );
                    })}
                </Box>

                <Box data-id="exp info" sx={style.expInfo}>
                    {selectedExp && (
                        <Stack spacing={1.5} sx={style.expContainer}>
                            <Typography sx={style.title}>{selectedExp.Title}</Typography>
                            <Typography sx={style.date}>{selectedExp.workData}</Typography>
                            {selectedExp.description.length > 1 ? (
                                <ul>
                                    {selectedExp.description.map((desc, index) => (
                                        <li key={index}>
                                            <Typography variant="subtitle1" sx={style.description}>
                                                {desc.point1}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <Typography variant="subtitle1" sx={style.description}>
                                    {selectedExp.description[0].point1}
                                </Typography>
                            )}
                            <Box sx={style.devToolsContainer}>
                                <Typography sx={style.devToolsText}>Development Tools : </Typography>
                                {selectedExp.developmentTools && selectedExp.developmentTools.map((tool, index) => (
                                    <Typography key={index} sx={style.devToolsPoints}>{tool}</Typography>
                                ))}
                            </Box>
                        </Stack>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ExperienceDesktopView;
