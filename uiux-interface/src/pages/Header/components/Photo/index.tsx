import { Card, CardMedia } from '@mui/material';
import { style } from './style';
import { myPhoto } from '../../../../shared/constants/image';

const Photo = () => {
    return (
        <Card id='Photo' sx={style.container}>
            <CardMedia component='img' src={myPhoto} alt='photo' sx={style.photo} />
        </Card>
    )
}

export default Photo
