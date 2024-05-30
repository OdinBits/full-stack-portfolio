// AboutItem.tsx
import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { IAbout } from '../../../shared/interfaces/IAbout';
import style from '../style';
import { urlFor } from '../../../shared/config/clientConfig';


const Items: React.FC<IAbout.AboutItemProps> = ({ about, isDesktop }) => (
        <Grid
            id='about-items'
            item
            sx={style.skillItems.items}
        >
            <Card
                data-id='card-container'
                sx={style.skillItems.cardContainer}
            >
                <CardMedia
                    data-id='card-media'
                    component="img"
                    image={urlFor(about.imgUrl)}
                    alt={about.title}
                    sx={style.skillItems.cardMedia}
                />
                <CardContent
                    data-id='card-content'
                    sx={style.skillItems.cardContent}
                >
                    <Typography
                        variant="h5"
                        sx={style.skillItems.skillTitle}
                    >
                        {about.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={style.skillItems.skillDescription}
                    >
                        {about.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
);

export default React.memo(Items);
