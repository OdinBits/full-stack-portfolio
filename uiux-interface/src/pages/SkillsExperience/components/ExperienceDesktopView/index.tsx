import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { style } from './style';
import { SkillsExperienceType } from '../../../../shared/types/SkillsExperienceTypes';

const ExperienceDesktopView = () => {
    const expPoints = SkillsExperienceType.expPorps;
    const validExpPoints = Array.isArray(expPoints) ? expPoints : [];

    const [selectedExp, setSelectedExp] = useState(validExpPoints[0] || {});

    const handleImageClick = (exp: any) => {
        setSelectedExp(exp);
    };

    return (
        <Box id="Experience container">
            <Box data-id="content" sx={style.content}>
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
                                        height: '1.8px',
                                        background: isSelected ? 'linear-gradient(to right, #a0c4ff, #1e3a8a)' : 'transparent',
                                        transition: 'background 0.3s',
                                    }}
                                />
                            </React.Fragment>
                        );
                    })}
                </Box>

                <Box data-id="exp info" sx={style.expInfo}>
                    {selectedExp && (
                        <>
                            <Typography sx={{ fontSize: '22px' }}>{selectedExp.Title}</Typography>
                            <Typography sx={{ fontSize: '16px', paddingBottom: '10px' }}>{selectedExp.workData}</Typography>
                            <Typography variant="subtitle1">{selectedExp.description}</Typography>
                            <Box sx={{ display: 'flex', padding: '10px' }}>
                                <Typography>Development Tools </Typography>
                                {selectedExp.developmentTools && selectedExp.developmentTools.map((tool, index) => (
                                    <Typography key={index} sx={{ padding: '5px', margin: '5px' }}>{tool}</Typography>
                                ))}
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ExperienceDesktopView;
