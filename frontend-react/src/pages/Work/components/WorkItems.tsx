import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { GitHub, Visibility } from '@mui/icons-material';
import { IWork } from '../../../shared/interfaces/IWork';
import style from '../style';
import { urlFor } from '../../../shared/config/clientConfig';

const WorkItems: React.FC<IWork.workProps> = ({ filteredData, isDesktop }) => {

    return (
        <Grid
            container
            data-id='motion-div-filterWork'
            sx={style.workItems.itemsContainer}
        >
            {filteredData?.map((work: any, index: any) => (
                <Grid
                    key={index}
                    item
                    data-id='card-container'
                    sx={style.workItems.cardContainer}
                >
                    <Card
                        sx={{
                            width: '100%',
                            height: '100%',
                            boxShadow: 'none'
                        }}
                    >
                        <Box
                            data-id='img-box-container'
                            sx={style.workItems.imgBox}
                        >
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
                                {work.tags && work.tags.length > 0 ? work.tags[0] : 'No Tags'}
                            </Box>
                            <Box
                                data-id='hover-box'
                                sx={style.workItems.hoverBox}
                            >
                                <Box
                                    data-id='hover-box-content'
                                    sx={style.workItems.hoverContent}
                                >
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            margin: '5px',
                                            width: '30px',
                                            height: '30px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Visibility />
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '5px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            margin: '5px',
                                            width: '30px',
                                            height: '30px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Box
                                            component='a'
                                            href={work.codeLink}
                                            sx={{textDecoration:'none', color:'white'}}
                                        >
                                            <GitHub />
                                        </Box>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: '18px', marginTop: '10px' }}
                            >
                                {work.title}
                            </Typography>
                            <Typography
                                sx={{ fontSize: '17px', color: '#7ca8e6' }}
                            >
                                {work.description}</Typography>

                            <Box sx={{ width: 'fit-content', height: '100%', textAlign: 'left', padding: '10px', marginTop: '20px', borderRadius: '10px', background: '#e9f2f7' }}>
                                {work?.bulletPoints?.map((points: any, index: any) => (
                                    <Typography
                                        key={index}
                                        variant='body2'
                                        color='textSecondary'
                                        sx={{
                                            marginTop: '1px',
                                            color: '#8c9396',
                                            '&:hover': {
                                                color: 'rgba(255, 0, 0, 0.5)' // Faint reddish color
                                            }
                                        }}
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
