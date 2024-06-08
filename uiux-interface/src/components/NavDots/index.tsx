import { useAppSelector } from '../../store';
import { Box } from '@mui/material';
import { style } from './style';
import { NavTypes } from '../../shared/types/NavTypes';

const NavDots = ({idName}:any) => {
    const { activePage } = useAppSelector((state) => state.navLinkStates);

    return (
        <Box id='navigaiton-dots' sx={style.container}>
            {NavTypes.navItems.map((item, index) => (
                <Box
                    component='a'
                    href={`#${item.name}`}
                    key={item.id + index}
                    sx={{ ...style.pagesStyle, background: idName === item.name ? '#313BAC' : '#D3D3D3', }}
                />
            ))}
        </Box>
    );
};

export default NavDots;
