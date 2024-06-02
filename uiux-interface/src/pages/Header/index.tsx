import { Box } from '@mui/material';
import { style } from './style';


const Header = () => {
    return (
        <Box id='Header' sx={style.container}>
            <Box data-id='header-content' sx={style.content}>
                Header
            </Box>
        </Box>
    )
}

export default Header
