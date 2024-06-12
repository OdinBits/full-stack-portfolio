import { Backdrop, Box, Divider } from '@mui/material';
import { style } from './style';
import NavbarDesktop from './components/desktop';
import NavbarMobile from './components/mobile';
import MenuBlock from './components/menuBlock';
import { useState } from 'react';

const Navbar: React.FC = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box id='Navbar' sx={style.container}>
      <Box data-id='navbar-content' sx={style.content}>
        <NavbarDesktop />
        <NavbarMobile handleToggle={handleToggle} />
        <Divider />
        {mobileOpen && <MenuBlock handleToggle={handleToggle} />}
      </Box>
      <Backdrop open={mobileOpen} sx={style.backdrop} />
    </Box>
  )
}

export default Navbar
