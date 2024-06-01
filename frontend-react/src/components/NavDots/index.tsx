import { useAppSelector } from '../../store';
import NavbarTypes from '../../shared/types/NavbarTypes';
import { Box } from '@mui/material';
import { style } from './style';

const NavDots = () => {
    const { activePage } = useAppSelector((state) => state.navigation);

    return (
        <Box id='navigaiton-dots' sx={style.container}>
            {NavbarTypes.navPages.map((item, index) => (
                <Box
                    component='a'
                    href={`#${item.name}`}
                    key={item.id + index}
                    sx={{ ...style.pagesStyle, background: activePage === item.name ? '#313BAC' : '#D3D3D3', }}
                />
            ))}
        </Box>
    );
};

export default NavDots;
