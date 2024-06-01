import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { IWork } from '../../../shared/interfaces/IWork';
import { urlFor } from '../../../shared/config/clientConfig';
import style from '../style';

const WorkItems: React.FC<IWork.workProps> = ({ filteredData }) => {

    return (
        <Grid id='work-items-container' container data-id='motion-div-filterWork' sx={style.workItems.itemsContainer}>
            {filteredData?.map((work: any, index: any) => (
                <Grid
                    data-id='card-container'
                    key={index}
                    item
                    sx={style.workItems.gridContainer}
                >
                    <Card sx={style.workItems.cardContainer}>
                        <Box data-id='img-box-container' sx={style.workItems.imgBox}>
                            <CardMedia
                                component="img"
                                height="140"
                                width='100%'
                                image={urlFor(work.imgUrl)}
                                alt={work.name}
                                sx={style.workItems.img}
                            />
                            <Box
                                data-id='image-item-tags'
                                sx={style.workItems.imageTags}
                            >
                                {work.tags && work.tags.length > 0 ? work.tags[0] : 'None'}
                            </Box>
                            <Box
                                data-id='hover-box'
                                sx={style.workItems.hoverBox}
                            >
                                <Box
                                    data-id='hover-box-content'
                                    sx={style.workItems.hoverContent}
                                >
                                    {/* <Typography sx={style.workItems.visibilityIcon}>
                                        <Visibility />
                                    </Typography> */}
                                    <Typography sx={style.workItems.gitHubIcon}>
                                        <Box
                                            component='a'
                                            href={work.codeLink}
                                            sx={{ textDecoration: 'none', color: 'white' }}
                                        >
                                            <GitHub />
                                        </Box>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <CardContent sx={{ background: 'white' }}>
                            <Typography
                                sx={{ fontSize: '18px', marginTop: '10px' }}
                            >
                                {work.title}
                            </Typography>
                            <Typography
                                sx={{ fontSize: '17px', color: '#7ca8e6' }}
                            >
                                {work.description}</Typography>

                            <Box sx={style.workItems.bulletPointsContainer}>
                                {work?.bulletPoints?.map((points: any, index: any) => (
                                    <Typography
                                        key={index}
                                        variant='body2'
                                        color='textSecondary'
                                        sx={style.workItems.bulletPoints}
                                    >
                                        {points}
                                    </Typography>

                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default WorkItems;
