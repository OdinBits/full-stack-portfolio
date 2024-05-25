import { Opacity } from "@mui/icons-material";
import assets from "../../shared/constants/images";


const navStyle = {
    imgDesktop: {
        display: 'flex',
        mr: 1,
    },
    logoDesktop: {
        mr: 2,
        flexGrow: { xs: 1, md: 0 },
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'black',
        textDecoration: 'none',
        warp: 'noWrap',
    },
    hamburgerBoxContainer: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'flex-end'
    },
    backDrop: {
        backdropFilter: 'blur(0.5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    mobileMenu: {
        position: 'absolute',
        top: 'calc(100% + 1px)',
        left: 'calc(50% - 24%)',
        width: 'calc(100% - 20%)',

        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        backgroundColor: 'white',
        overflowY: 'auto',
        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
        backgroundImage: `url(${assets.bgWhite})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    closeIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    },
    mobileMenuContainer: {
        position: 'relative',
        top: '20%',
        padding: '10px',
        width: '80%',
        margin: '10px auto',
    },
    mobileMenuButtons: {
        my: 1,
        color: 'black',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    menu: {
        display: { xs: 'block', md: 'none' },
        height: '50vh',
        width: '50vw'
    },
    logoMobile: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'black',
        textDecoration: 'none',
        wrap: 'noWrap',
    },
    navDesktop: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
    },
    navDesktopButtons: {
        my: 2,
        color: 'black',
        display: 'block',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    muiAvatar: {
        display: { xs: 'none', md: 'flex' }
    },
    avatarMenu: {
        mt: '45px',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
        }
    },
    iconButton: {
        p: 0,
        color: 'black'
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(2px)',
        color: 'black',
        padding: "2px 20px",
        boxSizing: "border-box",
    }
}

export default navStyle;