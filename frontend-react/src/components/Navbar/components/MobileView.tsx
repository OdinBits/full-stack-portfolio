import { Backdrop, Box, Button, IconButton } from '@mui/material'
import React from 'react'
import style from '../style'
import { Cancel } from '@mui/icons-material'
import NavbarTypes from '../../../shared/types/NavbarTypes'
import { INavbar } from '../../../shared/interfaces/INavbar'

const MobileView: React.FC<INavbar.Mobile> = ({isOpen,toggleOpen}) => {
    return (
        <Box>
            <Backdrop open={isOpen} sx={style.backDrop} />
            <Box sx={style.mobileMenu}>
                <IconButton sx={style.closeIcon}>
                    <Cancel onClick={toggleOpen} />
                </IconButton>
                {NavbarTypes.navPages.map((page, index) => (
                    <Box key={page.id} sx={style.mobileMenuContainer}>
                        <Box
                            component='a'
                            href={`#${page.name}`}
                            key={page.id + index}
                            sx={{ textDecoration: 'none' }}
                        >
                            <Button key={page.id} onClick={toggleOpen} sx={style.navDesktopButtons}>
                                {page.name}
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default MobileView
