import React from 'react';
import { AppBar, Avatar, Backdrop, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Cancel } from '@mui/icons-material';
import STYLNavbar from './STYLNavbar';
import TNavbar from '../../shared/types/TNavbar';

const renderMobileMenu = (isOpen: any, handleCloseUserMenu: any, toggleOpen: any) => (
  <>
    <Backdrop open={isOpen} sx={STYLNavbar.backDrop} />
    <Box sx={STYLNavbar.mobileMenu}>
      <IconButton onClick={handleCloseUserMenu} sx={STYLNavbar.closeIcon}>
        <Cancel onClick={toggleOpen} />
      </IconButton>
      {TNavbar.navPages.map((page) => (
        <Box key={page.id} onClick={handleCloseUserMenu} sx={STYLNavbar.mobileMenuContainer}>
          <Button sx={STYLNavbar.mobileMenuButtons}> {page.name} </Button>
        </Box>
      ))}
    </Box>
  </>
);

const renderDesktopNav = (handleCloseUserMenu: any) => (
  <Box sx={STYLNavbar.navDesktop}>
    {TNavbar.navPages.map((page) => (
      <Button key={page.id} onClick={handleCloseUserMenu} sx={STYLNavbar.navDesktopButtons}>
        {page.name}
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
    <AppBar
      position="sticky"
      sx={STYLNavbar.container}
    >
      <Toolbar
        data-id='nav-content'
      >
        <Box
          data-id='nav-logo'
          sx={{ display: 'flex' }}
        >
          <Typography
            sx={STYLNavbar.logoName}
          >NISHANT</Typography>
          <Typography
            sx={STYLNavbar.title}
          >Dev</Typography>
        </Box>

        <Box
          data-id='hamburder-box'
          sx={STYLNavbar.hamburgerBoxContainer}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleOpen}
          >
            <MenuIcon />
          </IconButton>
          {isOpen 
            && 
            renderMobileMenu(isOpen, handleCloseUserMenu, toggleOpen)}
        </Box>

        {renderDesktopNav(handleCloseUserMenu)}

        <Box>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={STYLNavbar.iconButton}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={STYLNavbar.muiAvatar}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={STYLNavbar.avatarMenu}
            id="menu-appbar"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            keepMounted
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={handleCloseUserMenu}
              >
                <Typography
                  textAlign="center"
                >{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
