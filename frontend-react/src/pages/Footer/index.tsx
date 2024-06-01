import { AppBar,Toolbar,Typography, Box } from '@mui/material';
import { style } from './style';
import { useAppSelector } from '../../store';

const Footer: React.FC = () => {
    const { data } = useAppSelector((state) => state.person)
    return (
        <AppBar id='footer' position="static" sx={style.container}>
            <Toolbar>
                <Box sx={{width:'100%'}}>
                    <Typography variant="body1" component="div" sx={style.text}>
                        &copy; {new Date().getFullYear()} {data[0]?.rights}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Footer