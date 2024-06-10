import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';
import { style } from './style';
import { ConstImg } from '../../../../shared/constants/image';

const TextBox = () => {
    return (
        <Box id='TextBox-container' sx={style.container}>
            <Stack spacing={2.5} sx={style.content}>
                <Typography variant='subtitle1' sx={style.greet}>Hi, my name is Nishant Chavan</Typography>
                <Typography component='p' sx={style.brief}>
                    I'm a full stack developer, specialized in development of web
                    applications using React,Node.js,Typescript & more
                </Typography>
                    <Button  href={`#ABOUT`} sx={style.button}>
                        FIND OUT MORE
                    </Button>
            </Stack>
            <Card id='Photo' sx={style.photoContainer}>
                <CardMedia component='img' src={ConstImg.myPhoto} alt='photo' sx={style.photo} />
            </Card>
        </Box>
    )
}

export default TextBox
