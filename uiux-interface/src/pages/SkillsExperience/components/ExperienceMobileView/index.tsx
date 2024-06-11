import React, { useState } from 'react';
import { Box, Button, Collapse, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';
const CustomDropdown = () => {
    const expPoints = SkillsExperienceType.expPorps;
    const validExpPoints = Array.isArray(expPoints) ? expPoints : [];

    // Initialize selectedExp state with the first item selected by default
    const [selectedExp, setSelectedExp] = useState(
        validExpPoints.map((_, index) => index === 0)
    );

    const handleImageClick = (index: number) => {
        const newSelectedExp = [...selectedExp];
        newSelectedExp[index] = !newSelectedExp[index];
        setSelectedExp(newSelectedExp);
    };

    return (
        <Box sx={{ width: '100%', padding: '10px 30px', display: { xs: 'block', md: 'none' } }}>
            {validExpPoints.map((item, index) => (
                <Box sx={style.content} key={index}>
                    <Button
                        aria-controls={`custom-dropdown-menu-${index}`}
                        aria-haspopup="true"
                        onClick={() => handleImageClick(index)}
                        sx={{
                            borderRadius: '10px',
                            justifyContent: 'space-between',
                            padding: '0px 15px',
                            width: '100%',
                            height: '80px',
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            '&:focus': {
                                backgroundColor: 'transparent',
                            },
                            '&:active': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <Box sx={{ width: '150px', height: '50px' }}>
                            <Box component="img" src={item.img} sx={style.img} />
                        </Box>
                        <ArrowDropDownIcon sx={{ fontSize: '26px' }} />
                    </Button>

                    <Collapse in={selectedExp[index]} timeout="auto" unmountOnExit>
                        <Box data-id="exp info" sx={style.expInfo}>
                            <Stack spacing={1.5} sx={style.expContainer}>
                                <Typography sx={style.title}>{item.Title}</Typography>
                                <Typography sx={style.date}>{item.workData}</Typography>
                                {item.detailDesc.length > 1 ? (
                                    <ul style={{ width: '100%' }}>
                                        {item.detailDesc.map((desc, descIndex) => (
                                            <Box key={descIndex} sx={{ margin: 'auto', width: '100%' }}>
                                                <Typography sx={style.subTitle}>{desc.subTitle}</Typography>
                                                {desc.points.map((points, j) => (
                                                    <li key={j} style={style.li}>
                                                        <Typography variant="subtitle1" sx={style.description}>
                                                            {points}
                                                        </Typography>
                                                    </li>
                                                ))}
                                            </Box>
                                        ))}
                                    </ul>
                                ) : (
                                    <Typography variant="subtitle1" sx={style.description}>
                                        {item.detailDesc[0].points}
                                    </Typography>
                                )}
                                <Box sx={style.devToolsContainer}>
                                    <Typography sx={style.devToolsText}>Development Tools : </Typography>
                                    {item.developmentTools && item.developmentTools.map((tool, i) => (
                                        <Typography key={i} sx={style.devToolsPoints}>{tool}</Typography>
                                    ))}
                                </Box>
                            </Stack>
                        </Box>
                    </Collapse>
                </Box>
            ))}
        </Box>
    );
}

export default CustomDropdown;
