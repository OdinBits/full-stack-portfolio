import { Box, Button } from '@mui/material'
import React from 'react'
import style from '../style'
import NavbarTypes from '../../../shared/types/NavbarTypes'
import { INavbar } from '../../../shared/interfaces/INavbar'

const DesktopView: React.FC = () => {
    return (
        <Box sx={style.navDesktop}>
            {NavbarTypes.navPages.map((page, index) => (
                <Box
                    component='a'
                    href={`#${page.name}`}
                    key={page.id + index}
                    sx={{ textDecoration: 'none' }}
                >
                    <Button key={page.id} sx={style.navDesktopButtons}>
                        {page.name}
                    </Button>
                </Box>
            ))}
        </Box>
    )
}

export default DesktopView
