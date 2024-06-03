import { Box, Button, Typography } from '@mui/material';
import { style } from './style';

const TextBox = () => {
    return (
        <Box  id='TextBox-container' sx={style.container}>
            <Box sx={style.content}>
                <Typography variant='subtitle1' sx={style.greet}>Hi, my name is Nishant Chavan</Typography>
                <Typography component='p' sx={style.brief}>
                    I'm a full stack developer, specialized in development of web
                    applications using React,Node.js,Typescript & more
                </Typography>
                <Button sx={style.button}> FIND OUT MORE </Button>
            </Box>
        </Box>
    )
}

export default TextBox
