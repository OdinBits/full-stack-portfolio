import React from 'react';
import { AppBar, Avatar, Backdrop, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Cancel } from '@mui/icons-material';
import style from './style';
import NavbarTypes from '../../shared/types/NavbarTypes';

const renderMobileMenu = (isOpen: any, handleCloseUserMenu: any, toggleOpen: any) => (
  <>
    <Backdrop open={isOpen} sx={style.backDrop} />
    <Box sx={style.mobileMenu}>
      <IconButton onClick={handleCloseUserMenu} sx={style.closeIcon}>
        <Cancel onClick={toggleOpen} />
      </IconButton>
      {NavbarTypes.navPages.map((page,index) => (
        <Box key={page.id} onClick={handleCloseUserMenu} sx={style.mobileMenuContainer}>
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
  </>
);

const renderDesktopNav = (handleCloseUserMenu: any) => (
  <Box sx={style.navDesktop}>
    {NavbarTypes.navPages.map((page, index) => (
      <Box
        component='a'
        href={`#${page.name}`}
        key={page.id + index}
        sx={{ textDecoration: 'none' }}
      >
        <Button key={page.id} onClick={handleCloseUserMenu} sx={style.navDesktopButtons}>
          {page.name}
        </Button>
      </Box>
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
      sx={style.container}
    >
      <Toolbar
        data-id='nav-content'
      >
        <Box
          data-id='nav-logo'
          sx={{ display: 'flex' }}
        >
          <Typography
            sx={style.logoName}
          >
            NISHANT</Typography>
          <Typography
            sx={style.title}
          >
            Dev
          </Typography>
        </Box>

        <Box
          data-id='hamburder-box'
          sx={style.hamburgerBoxContainer}
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
          {/* <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={style.iconButton}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={style.muiAvatar}
              />
            </IconButton>
          </Tooltip> */}
          {/* <Menu
            sx={style.avatarMenu}
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
          </Menu> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
