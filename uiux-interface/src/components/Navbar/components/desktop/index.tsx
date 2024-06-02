import { Box, Button, Typography } from '@mui/material'
import { style } from './style';
import { NavType } from '../../../../shared/types/NavType';


const NavbarDesktop = () => {
    return (
        <Box id='responsive-navbar-container-box' component="nav" sx={style.container} >
            {NavType.navItems.map((item) => (
                <Button key={item} sx={style.buttons}>
                    <Typography>
                        {item}
                    </Typography>
                </Button>
            ))}
        </Box>
    )
}

export default NavbarDesktop;
