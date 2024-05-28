import { useAppSelector } from '../../store';
import navAttributes from '../../shared/types/TNavbar';
import { Box } from '@mui/material';
import STYLTools from './STYLTools';

const COMPNavigationDots = () => {
    const { activePage } = useAppSelector((state) => state.navigation);

    return (
        <Box
            id='navigaiton-dots'
            sx={STYLTools.navDots.container}
        >
            {navAttributes.navPages.map((item, index) => (
                <Box
                    component='a'
                    href={`#${item}`}
                    key={item.id + index}
                    sx={{ ...STYLTools.navDots.pagesStyle, background: activePage === item.name ? '#313BAC' : '#D3D3D3', }}
                />
            ))}
        </Box>
    );
};

export default COMPNavigationDots;
