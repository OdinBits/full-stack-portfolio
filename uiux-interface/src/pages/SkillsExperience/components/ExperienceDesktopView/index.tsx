import { Box } from '@mui/material';
import React from 'react'
import { style } from './style';
import ExperienceContent from '../ExperienceContent/ExperienceContent';

const ExperienceDesktopView = ({validExpPoints,selectedExp,handleImageClick}:any) => {
    return (
        <>
            <Box data-id="option div" sx={style.optionDiv}>
                    {validExpPoints.map((item:any, index:any) => {
                        const isSelected = item === selectedExp;
                        return (
                            <Box key={index}>
                                <Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
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
                                </Box>

                                
                            </Box>
                        );
                    })}
                </Box>

                <Box data-id="exp info" sx={style.expInfo}>
                    {selectedExp && <ExperienceContent selectedExp={selectedExp}/>}
                </Box>
        </>
    )
}

export default ExperienceDesktopView
