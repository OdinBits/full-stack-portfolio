import { Cancel } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { style } from './style';
import { NavTypes } from '../../../../shared/types/NavTypes';
import { INav } from '../../../../shared/interfaces/INav';
import { useEffect } from 'react';
import gsap from 'gsap';

const MenuBlock: React.FC<INav.toogleHandler> = ({ handleToggle }) => {
    const handleClick = (event:any, id:any) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        handleToggle(); 
    };

    useEffect(() => {
        gsap.fromTo('#MenuBlock', { x: '-100%' }, { x: '0%', duration: 0.5, ease: 'power3.out' });
    }, []);

    return (
        <Box id='MenuBlock' sx={style.container}>
            <Stack spacing={3}>
                <Box sx={style.iconContainer}>
                    <IconButton onClick={handleToggle} sx={style.iconButton}>
                        <Cancel sx={style.cancelIcon} />
                    </IconButton>
                </Box>
                {NavTypes.navItems.map((item: any, index: any) => (
                    <Button
                        key={item?.id + index}
                        onClick={(e) => handleClick(e, item?.pathName)}
                        sx={style.button}
                    >
                        {item?.name}
                    </Button>
                ))}
            </Stack>
        </Box>
    );
};

export default MenuBlock;
