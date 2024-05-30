const NavbarTypes = {
    navPages: [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Work' },
        { id: 4, name: 'Skills' },
        // { id: 5, name: 'Testimonial' },
        { id: 5, name: 'Contact' },
    ],
    settings: [
        'Profile',
        'Account',
        'Dashboard',
        'Logout'
    ],
    ThunkState: {
        activePage: ''
    }
}

export default NavbarTypes;