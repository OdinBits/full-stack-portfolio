// AboutItem.tsx
import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { IAbout } from '../../../shared/interfaces/IAbout';
import style from '../style';
import { urlFor } from '../../../shared/config/clientConfig';
import { MotionBox } from '../../../components';


const Items: React.FC<IAbout.AboutItemProps> = ({ about, isDesktop }) => (
    <Grid
        id='about-items'
        item
        sx={style.skillItems.items}
    >
        <MotionBox
            id='items-motion'
            sx={{ width: '100%', height: '100%' }}
            motionProps={{
                initial: { opacity: 0, scale: 0 },
                animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
                whileHover: { scale: 1.1, boxShadow: '0px 0px 20px rgba(173, 216, 230, 0.5)' },
                transition: { duration: 0.5 },
            }}
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
        </MotionBox>

    </Grid>
);

export default React.memo(Items);
