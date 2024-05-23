import { useAppSelector } from '../../store';
import navAttributes from '../../shared/types/Navbar';
import { Box } from '@mui/material';

const NavigationDots = () => {
    const { activePage } = useAppSelector((state) => state.navigation);

    return (
        <Box sx={{
            width: '50px',
            height: '100%',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            position: 'absolute',
            right: 0
        }}>
            {navAttributes.navPages.map((item, index) => (
                <Box
                    component='a'
                    href={`#${item}`}
                    key={item + index}
                    sx={{
                        background: activePage === item ? '#313BAC' : '#D3D3D3', // Active dot blue, inactive dot faint gray
                        borderRadius: '50%',
                        width: '10px',
                        height: '10px',
                        margin: '10px',
                        transition: 'background-color 0.3s ease' // Smooth transition effect
                    }}
                />
            ))}
        </Box>
    );
};

export default NavigationDots;
