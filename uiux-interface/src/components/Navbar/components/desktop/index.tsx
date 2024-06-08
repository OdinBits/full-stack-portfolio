import { Box, Button, Typography } from '@mui/material'
import { style } from './style';
import { NavTypes } from '../../../../shared/types/NavTypes';

const NavbarDesktop = () => {
    return (
        <Box id='responsive-navbar-container-box' component="nav" sx={style.container} >
            {NavTypes.navItems.map((item) => (
                <Button key={item?.id} sx={style.buttons}>
                    <Typography>
                        {item?.name}
                    </Typography>
                </Button>
            ))}
        </Box>
    )
}

export default NavbarDesktop;
