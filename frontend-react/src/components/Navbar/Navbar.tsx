import React from 'react';
import { AppBar, Avatar, Backdrop, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import assets from '../../shared/constants/images';
import MenuIcon from '@mui/icons-material/Menu';
import { Cancel } from '@mui/icons-material';
import navStyle from './NavbarStyle';
import navAttributes from '../../shared/types/Navbar';

const renderMobileMenu = (isOpen:any, handleCloseUserMenu:any, toggleOpen:any) => (
  <>
    <Backdrop open={isOpen} sx={navStyle.backDrop} />
    <Box sx={navStyle.mobileMenu}>
      <IconButton onClick={handleCloseUserMenu} sx={navStyle.closeIcon}>
        <Cancel onClick={toggleOpen} />
      </IconButton>
      {navAttributes.navPages.map((page) => (
        <Box key={page} onClick={handleCloseUserMenu} sx={navStyle.mobileMenuContainer}>
          <Button sx={navStyle.mobileMenuButtons}> {page} </Button>
        </Box>
      ))}
    </Box>
  </>
);

const renderDesktopNav = (handleCloseUserMenu:any) => (
  <Box sx={navStyle.navDesktop}>
    {navAttributes.navPages.map((page) => (
      <Button key={page} onClick={handleCloseUserMenu} sx={navStyle.navDesktopButtons}>
        {page}
      </Button>
    ))}
  </Box>
);

const Navbar = () => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={navStyle.container}>
      <Toolbar >
        <Box component='img' alt='logo' src={assets.logo} sx={navStyle.imgDesktop} />
        <Typography variant="h6" sx={navStyle.logoDesktop}> Dev </Typography>

        <Box sx={navStyle.hamburgerBoxContainer}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleOpen}
          >
            <MenuIcon />
          </IconButton>
          {isOpen && renderMobileMenu(isOpen, handleCloseUserMenu, toggleOpen)}
        </Box>

        {renderDesktopNav(handleCloseUserMenu)}

        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={navStyle.iconButton}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={navStyle.muiAvatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={navStyle.avatarMenu}
            id="menu-appbar"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            keepMounted
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
