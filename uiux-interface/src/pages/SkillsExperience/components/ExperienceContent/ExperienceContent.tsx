import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { style } from './style'

const ExperienceContent = ({selectedExp}:any) => {
    return (
        <Stack spacing={1.5} sx={style.expContainer}>
            <Typography sx={style.title}>{selectedExp.Title}</Typography>
            <Typography sx={style.date}>{selectedExp.workData}</Typography>
            {selectedExp.detailDesc.length > 1 ? (
                <ul>
                    {selectedExp.detailDesc.map((desc:any, index:any) => (
                        <React.Fragment key={index}>
                            <Typography sx={style.subTitle}>{desc.subTitle}</Typography>
                            {desc.points.map((point:any, pointIndex:any) => (
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
                    {selectedExp.detailDesc[0].points}
                </Typography>
            )}
            <Box sx={style.devToolsContainer}>
                <Typography sx={style.devToolsText}>Development Tools :</Typography>
                {selectedExp.developmentTools && selectedExp.developmentTools.map((tool:any, index:any) => (
                    <Typography key={index} sx={style.devToolsPoints}>{tool}</Typography>
                ))}
            </Box>
        </Stack>
    )
}

export default ExperienceContent
