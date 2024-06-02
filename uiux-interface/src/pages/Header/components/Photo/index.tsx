import { Box } from '@mui/material'
import { myPhoto } from '../../../../shared/constants/image';
import { style } from './style';

const Photo = () => {
    return (
        <Box id='Photo' sx={style.container}>
            <Box component='img' src={myPhoto} alt='photo' sx={style.photo}/>
        </Box>
    )
}

export default Photo
