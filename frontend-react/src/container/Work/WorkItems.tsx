import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { urlFor } from '../../shared/config/client';
import workThunk from '../../store/thunks/workThunk';
import workStyle from './WorkStyle';
import { GitHub, Visibility } from '@mui/icons-material';

const WorkItems = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(workThunk());
    }, [dispatch]);

    const { data, filteredData } = useAppSelector((state) => state.work);

    return (
        <Grid container data-id='motion-div-filterWork' sx={workStyle.workItems.itemsContainer}>
            {data?.map((work: any, index: any) => (
                <Grid item key={index} data-id='card-contianer' sx={workStyle.workItems.cardContainer}>
                    <Card sx={{width:'100%',height:'100%',boxShadow:'none'}}>
                        <Box data-id='img-box-container' sx={workStyle.workItems.imgBox}>
                            <CardMedia
                                component="img"
                                height="140"
                                width='100%'
                                image={urlFor(work.imgUrl)}
                                alt={work.name}
                                sx={workStyle.workItems.img}
                            />
                            <Box data-id='image-item-tags' sx={workStyle.workItems.imageTags}>
                                {work.tags && work.tags.length > 0 ? work.tags[0] : 'No Tags'}
                            </Box>
                            <Box data-id='hover-box' sx={workStyle.workItems.hoverBox}>
                                <Box data-id='hover-box-content' sx={workStyle.workItems.hoverContent}>
                                    <Typography sx={{ color: 'white', borderRadius: '50%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px', width: '30px', height: '30px', cursor: 'pointer' }}>
                                        <Visibility />
                                    </Typography>
                                    <Typography sx={{ color: 'white', borderRadius: '50%', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px', width: '30px', height: '30px', cursor: 'pointer' }}>
                                        <GitHub />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography variant='h6'>{work.title}</Typography>
                            <Typography variant='body2' color='textSecondary'>{work.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default WorkItems;
