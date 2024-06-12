import React, { useState } from 'react';
import { Box, Button, Collapse, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { style } from './style';
import { urlFor } from '../../../../shared/config/clientConfig';
import { format, parseISO } from 'date-fns';

const CustomDropdown = ({validExpPoints}:any) => {

    const [selectedExp, setSelectedExp] = useState(
        validExpPoints.map((_: any, index: number) => index === 0)
    );

    const handleImageClick = (index: number) => {
        const newSelectedExp = [...selectedExp];
        newSelectedExp[index] = !newSelectedExp[index];
        setSelectedExp(newSelectedExp);
    };

    const formatDate = (dateString: string) => {
        const date = parseISO(dateString);
        return format(date, 'yyyy - MMM');
    };


    return (
        <Box sx={{ width: '100%', padding: '10px 30px', display: { xs: 'block', md: 'none' } }}>
            {validExpPoints.map((item:any, index:any) => (
                <Box sx={style.content} key={`validExp-${item.id}`}>
                    <Button
                        aria-controls={`custom-dropdown-menu-${index}`}
                        aria-haspopup="true"
                        onClick={() => handleImageClick(index)}
                        sx={style.button}
                    >
                        <Box sx={{ width: '150px', height: '50px' }}>
                            <Box component="img" src={urlFor(item.img)} sx={style.img} />
                        </Box>
                        <ArrowDropDownIcon sx={{ fontSize: '26px' }} />
                    </Button>

                    <Collapse in={selectedExp[index]} timeout="auto" unmountOnExit>
                        <Box data-id="exp info" sx={style.expInfo}>
                            <Stack spacing={1.5} sx={style.expContainer}>
                                <Typography sx={style.title}>{item.title}</Typography>
                                <Typography sx={style.date}>{formatDate(item.startDate)} to {formatDate(item.endDate)}</Typography>
                                {item.detailDesc.length > 1 ? (
                                    <ul style={{ width: '100%' }}>
                                        {item.detailDesc.map((desc:any) => (
                                            <Box key={`detail-desc-${desc.subTitle}`} sx={{ margin: 'auto', width: '100%' }}>
                                                <Typography sx={style.subTitle}>{desc.subTitle}</Typography>
                                                {desc.points.map((points:any) => (
                                                    <li key={`points-${points}`} style={style.li}>
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
                                    {item.developmentTools?.map((tool:any) => (
                                        <Typography key={`tools-${tool}`} sx={style.devToolsPoints}>{tool}</Typography>
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
