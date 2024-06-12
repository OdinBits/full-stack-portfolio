import { Box } from '@mui/material';
import React from 'react'
import { style } from './style';
import ExperienceContent from '../ExperienceContent';
import { urlFor } from '../../../../shared/config/clientConfig';

const ExperienceDesktopView = ({validExpPoints,selectedExp,handleImageClick}:any) => {

    return (
     // !! Adding div/Box component corrupts the component
        <>
            <Box data-id="option div" sx={style.optionDiv}>
                    {validExpPoints.map((item:any, index:any) => {
                        const isSelected = item.id === selectedExp.id;
                        return (
                            <Box key={index}>
                                <Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
                                    <Box
                                        data-id="box img"
                                        sx={style.imgBox}
                                        onClick={() => handleImageClick(item)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Box component="img" src={urlFor(item.img)} sx={style.img} />
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
                    {selectedExp && <ExperienceContent selectedExp={selectedExp} validExpPoints={undefined} handleImageClick={undefined}/>}
                </Box>
        </>
    )
}

export default ExperienceDesktopView
