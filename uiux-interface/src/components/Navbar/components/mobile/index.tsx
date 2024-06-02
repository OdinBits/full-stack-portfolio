import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { style } from './style';
import { INav } from '../../../../shared/interfaces/INav';

const NavbarMobile: React.FC<INav.toogleHandler> = ({handleToggle}) => {
    return (
        <Box sx={style.container}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleToggle}
                sx={{ mr: 2, }}
            >
                <MenuIcon />
            </IconButton>
        </Box>
    )
}

export default NavbarMobile
