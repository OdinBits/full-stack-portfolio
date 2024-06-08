import { Cancel } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { style } from './style';
import { NavTypes } from '../../../../shared/types/NavTypes';
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
                {NavTypes.navItems.map((item: any, index: any) => (
                    <Box
                        component='a'
                        href={`#${item?.name}`}
                        key={item?.id + index}
                        sx={style.button}
                    >
                        <Button key={item?.id} onClick={handleToggle} sx={{}}>
                            {item?.name}
                        </Button>
                    </Box>
                ))}
            </Stack>

        </Box>
    )
}

export default MenuBlock
