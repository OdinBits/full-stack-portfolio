import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { IAbout } from '../../../../shared/interfaces/IAbout';
import { urlFor } from '../../../../shared/config/clientConfig';
import { style } from './style';

const AbilityCard: React.FC<IAbout.AboutItemProps> = ({about}) => {
    return (
        <Box sx={style.container}>
            <Card sx={style.content}>
                <CardMedia
                data-id='card-media'
                component="img"
                image={urlFor(about.imgUrl)}
                alt={about.title}
                sx={style.media}
                />
                <CardContent sx={style.cardContent}>
                    <Typography sx={style.title}>{about.title}</Typography>
                    <Typography sx={style.description}>{about.description}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default AbilityCard
