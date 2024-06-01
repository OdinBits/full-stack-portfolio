import { AppBar,Toolbar,Typography, Box } from '@mui/material';
import { style } from './style';

const Footer: React.FC = () => {
    return (
        <AppBar id='footer' position="static" sx={style.container}>
            <Toolbar>
                <Box sx={{width:'100%'}}>
                    <Typography variant="body1" component="div" sx={style.text}>
                        &copy; {new Date().getFullYear()} {process.env.REACT_APP_MY_RIGHTS}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Footer