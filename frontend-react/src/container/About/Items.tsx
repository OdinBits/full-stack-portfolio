import React, { useEffect } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { urlFor } from '../../shared/config/client';
import aboutStyle from './AboutStyle';
import { useAppDispatch, useAppSelector } from '../../store';
import aboutThunk from '../../store/thunks/aboutThunk';

const Items = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(aboutThunk());
    }, [dispatch]);

    const { data } = useAppSelector((state) => state.about);

    return (
        <Grid container  sx={aboutStyle.skillContainer}>
            {data?.map((about:any,index:any) => (
                <Grid item key={index} xs={10} sm={6} md={4} lg={3} sx={aboutStyle.skillItems}>
                    <Card sx={{margin:'auto',width:'100%',height:'100%'}}>
                        <CardMedia
                            component="img"
                            image={urlFor(about.imgUrl)}
                            alt={about.title}
                            sx={{ height: 140, objectFit: 'cover' }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" sx={aboutStyle.skillTitle}>
                                {about.title}
                            </Typography>
                            <Typography variant="subtitle1" sx={aboutStyle.skillDescription}>
                                {about.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Items;
