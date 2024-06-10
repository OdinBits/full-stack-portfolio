import { Box, Button } from '@mui/material'
import { style } from './style';
import { NavTypes } from '../../../../shared/types/NavTypes';

const NavbarDesktop = () => {
    return (
        <Box id='responsive-navbar-container-box' component="nav" sx={style.container} >
            {NavTypes.navItems.map((item, index) => (
                <Button
                    key={item.id + index}
                    href={`#${item.name}`}
                    sx={style.buttons}
                >
                    {item?.name}
                </Button>
            ))}
        </Box>
    )
}

export default NavbarDesktop;
