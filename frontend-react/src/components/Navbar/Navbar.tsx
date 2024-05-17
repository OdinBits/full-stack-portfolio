import React from 'react';
import { AppBar, Avatar, Backdrop, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import assets from '../../shared/constants/images';
import { pages } from '../../shared/types/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import navStyle from './NavbarStyle';
import { motion } from 'framer-motion';
import { Cancel } from '@mui/icons-material';


const Navbar = () => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky" >
      <Box sx={navStyle.container}>
        <Toolbar disableGutters >
          <Box component='img' alt='logo' src={assets.logo} sx={navStyle.imgDesktop} />
          <Typography
            variant="h6"
            sx={navStyle.logoDesktop}
          >
            Dev
          </Typography>

          <Box component='img' alt='logo' src={assets.logo} sx={navStyle.imgMobile} />
          <Typography
            variant="h5"
            sx={navStyle.logoMobile}
          >
            LOGO
          </Typography>

          <Box sx={navStyle.hamburger}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleOpen}
            >
              <MenuIcon />
            </IconButton>
            {isOpen &&
              <>
                <Backdrop
                  open={isOpen}
                  sx={{  
                    backdropFilter: 'blur(0.5px)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)' }} // Adjust the blur radius as needed
                />

                  <Box
                    sx={{
                      position: 'absolute',
                      top: 'calc(100% + 1px)', 
                      left: 'calc(50% - 24%)', 
                      width: 'calc(100% - 20%)',
                      height: '100vh',
                      borderTopLeftRadius: '15px', 
                      borderBottomLeftRadius: '15px',
                      backgroundColor: 'white',
                      overflowY: 'auto',
                      boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
                      backgroundImage: `url(${assets.bgWhite})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <IconButton
                      onClick={handleCloseNavMenu}
                      sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        
                      }}
                    >
                      <Cancel
                        onClick={toggleOpen} />
                    </IconButton>

                    {pages.map((page) => (
                      <Box
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          position: 'relative',
                          top: '20%',
                          padding: '10px',
                          width: '80%',
                          margin: '10px auto', 
                        }}
                      >
                        <Button sx={{
                          my: 1,
                          color: 'black',
                          transition: 'background-color 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#fff',
                            color: '#3c52b2',
                          },
                        }}>
                          {page}
                        </Button>
                      </Box>
                    ))}
                  </Box>
              </>
            }
          </Box>

          <Box sx={navStyle.navDesktop}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={navStyle.navDesktopButtons}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={navStyle.iconButton}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ display: { xs: 'none', md: 'flex' } }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Navbar
