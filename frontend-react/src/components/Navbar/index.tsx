import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import style from './style';
import MobileView from './components/MobileView';
import DesktopView from './components/DesktopView';

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar id='Navbar' position="sticky" sx={style.container}>
      {/* Content */}
      <Toolbar data-id='nav-content'>
        {/* Logo & Name */}
        <Box data-id='nav-logo' sx={{ display: 'flex' }}>
          <Typography sx={style.logoName}>{process.env.REACT_APP_MY_NAME}</Typography>
          <Typography sx={style.title}>{process.env.REACT_APP_MY_PROFESSION}</Typography>
        </Box>
        {/* Mobile view button and content */}
        <Box data-id='hamburder-box' sx={style.hamburgerBoxContainer}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleOpen}
          >
            <MenuIcon />
          </IconButton>
          {/* Mobile view menu block */}
          {isOpen && <MobileView isOpen={isOpen} toggleOpen={toggleOpen} />}
        </Box>
        {/* Desktop View */}
        <DesktopView />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
