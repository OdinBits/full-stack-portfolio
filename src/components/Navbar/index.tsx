import React from 'react';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { navLinks } from '../../shared/constants';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';

const Navbar: React.FC = () => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    const list = () => (
        <Box
            className='xsDiv'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navLinks.map((item) => (
                    <ListItem key={`links-${item.label}`}>
                        <ListItemButton component="a" href={item.href}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <header className="headerDiv">
            <nav className="navDiv">
                <ul className="ulMdDiv">
                    {navLinks.map((item) => (
                        <li key={`links-${item.label}`}>
                            <Button
                                className="navButton"
                                component="a"
                                href={item.href}
                            >
                                {item.label}
                            </Button>
                        </li>
                    ))}
                </ul>

                <IconButton
                    className="navIconButton"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </nav>
            <Divider />
        </header>
    );
};

export default Navbar;
