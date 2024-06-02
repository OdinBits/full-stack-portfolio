import { Box } from '@mui/material';
import { style } from './style';
import TextBox from './components/TextBox';
import Photo from './components/Photo';


const Header = () => {
    return (
        <Box id='Header' sx={style.container}>
            <Box data-id='header-content' sx={style.content}>
                <TextBox/>
                <Photo/>
            </Box>
        </Box>
    )
}

export default Header
