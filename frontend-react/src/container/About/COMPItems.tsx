// AboutItem.tsx
import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { IAbout } from '../../shared/interfaces/IAbout';
import { urlFor } from '../../shared/config/CFGclient';
import STYLAbout from './STYLAbout';

const COMPItems: React.FC<IAbout.AboutItemProps> = ({ about, isDesktop }) => (
        <Grid
            id='about-items'
            item
            sx={STYLAbout.skillItems.items}
        >
            <Card
                data-id='card-container'
                sx={STYLAbout.skillItems.cardContainer}
            >
                <CardMedia
                    data-id='card-media'
                    component="img"
                    image={urlFor(about.imgUrl)}
                    alt={about.title}
                    sx={STYLAbout.skillItems.cardMedia}
                />
                <CardContent
                    data-id='card-content'
                    sx={STYLAbout.skillItems.cardContent}
                >
                    <Typography
                        variant="h5"
                        sx={STYLAbout.skillItems.skillTitle}
                    >
                        {about.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={STYLAbout.skillItems.skillDescription}
                    >
                        {about.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
);

export default React.memo(COMPItems);
