import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { IAbout } from '../../../../shared/interfaces/IAbout';
import { urlFor } from '../../../../shared/config/clientConfig';
import { style } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const AbilityCard: React.FC<IAbout.AboutItemProps> = ({ about }) => {
    const slides = React.useMemo(() => (
        Array.isArray(about) && about.map((item: any) => (
            <SwiperSlide 
                style={{ 
                    boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
                    borderRadius: '10px',
                    flexGrow:1
                }} 
                key={`about-${item.title}}`}
            >
                <Card sx={style.cardContainer} className="card">
                    <CardMedia
                        data-id="card-media"
                        component="img"
                        image={urlFor(item.imgUrl)}
                        alt={item.title}
                        sx={style.media}
                    />
                    <CardContent sx={style.cardContent}>
                        <Typography sx={style.title}>{item.title}</Typography>
                        <Typography sx={style.description}>{item.description}</Typography>
                    </CardContent>
                </Card> 
            </SwiperSlide>
        ))
    ), [about]);

    return (
        <Box sx={style.container}>
            <Box sx={style.content}>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    style={{
                        width:'100%',
                        height:'100%'
                    }}
                >
                    {slides}
                </Swiper>
            </Box>
        </Box>
    );
};

export default AbilityCard;
