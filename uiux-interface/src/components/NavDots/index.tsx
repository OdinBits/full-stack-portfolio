import { Box } from '@mui/material';
import { style } from './style';
import { NavTypes } from '../../shared/types/NavTypes';
import { useEffect } from 'react';
import gsap from 'gsap';
import { INav } from '../../shared/interfaces/INav';



const NavDots: React.FC<INav.NavDots> = ({ idName }) => {

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

    useEffect(() => {
        gsap.fromTo('#navigaiton-dots', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power3.out' });
    }, []);

    return (
        <Box id='navigaiton-dots' sx={style.container}>
            {NavTypes.navDots.map((item, index) => (
                <Box
                    component='a'
                    href={`#${item.name}`}
                    onClick={(e) => handleClick(e, item.name)}
                    key={item.id + index}
                    sx={{
                        ...style.pagesStyle,
                        background: idName === item.name ? '#313BAC' : '#D3D3D3',
                    }}
                />
            ))}
        </Box>
    );
};

export default NavDots;
