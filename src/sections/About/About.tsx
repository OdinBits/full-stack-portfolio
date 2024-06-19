import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor } from '../../shared/config/clientConfig';
import aboutThunk from '../../store/thunks/aboutThunk';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import './style.scss';

const About: React.FC = () => {

    const dispatch = useAppDispatch();

    const { personData } = useAppSelector((state) => state.person);
    const { AboutData } = useAppSelector((state) => state.about);

    React.useEffect(() => {
        dispatch(aboutThunk());
    }, [])

    return (
        <section id='About'>
            {personData.map((items: any) => (
                <div className='content-container' key={`about-${items.name}`}>
                    <Typography className='title'>About</Typography>
                    <p className='aboutDescription'>{items.about}</p>
                    <Typography className='card-title'>I Know Thata <span className='text-purple-500'>Good Design</span> Means <span className='text-purple-500'>Good Bussiess</span></Typography>
                    <Swiper
                        className='swiper-cards-container'
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                    >
                        {AboutData.map((aboutItems: any) => (
                            <SwiperSlide className='swiper-sliders' key={`about-${aboutItems.title}}`}>
                                <Card className='card-container'>
                                    <CardMedia
                                        data-id="card-media"
                                        component="img"
                                        image={urlFor(aboutItems.imgUrl)}
                                        alt={aboutItems.title}
                                        className='card-img'
                                    />
                                    <CardContent className='card-content'>
                                        <h5 className='text-xl text-gray-900'>{aboutItems.title}</h5>
                                        <p className='text-gray-800'>{aboutItems.description}</p>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Typography className='title'>What is a full stack developer ?</Typography>
                    <p className='aboutDescription'>{items.roleDescription}</p>
                </div>
            ))}
        </section>
    )
}

export default About
