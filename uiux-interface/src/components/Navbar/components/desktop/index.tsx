import { Box, Button } from '@mui/material';
import { style } from './style';
import { NavTypes } from '../../../../shared/types/NavTypes';

const NavbarDesktop = () => {
    const handleClick = (event:any, id:any) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <Box id='responsive-navbar-container-box' component="nav" sx={style.container}>
            {NavTypes.navItems.map((item, index) => (
                <Button
                    key={item.id + index}
                    onClick={(e) => handleClick(e, item.name)}
                    sx={style.buttons}
                >
                    {item?.name}
                </Button>
            ))}
        </Box>
    );
};

export default NavbarDesktop;
