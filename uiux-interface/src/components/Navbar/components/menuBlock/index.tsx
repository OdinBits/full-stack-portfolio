import { Cancel } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { style } from './style';
import { NavType } from '../../../../shared/types/NavType';
import { INav } from '../../../../shared/interfaces/INav';
import { useEffect } from 'react';
import gsap from 'gsap';

const MenuBlock: React.FC<INav.toogleHandler> = ({ handleToggle }) => {

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
                {NavType.navItems.map((item: any, index: any) => (
                    <Box
                        component='a'
                        href={`#${item}`}
                        key={item + index}
                        sx={style.button}
                    >
                        <Button key={item} onClick={handleToggle} sx={{}}>
                            {item}
                        </Button>
                    </Box>
                ))}
            </Stack>

        </Box>
    )
}

export default MenuBlock
