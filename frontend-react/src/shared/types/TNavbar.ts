const TNavbar = {
    navPages: [
        { id: 1, name: 'HOME' },
        { id: 2, name: 'ABOUT' },
        { id: 3, name: 'WORK' },
        { id: 4, name: 'SKILLS' },
        { id: 5, name: 'TESTIMONIAL' },
        { id: 6, name: 'CONTACT' },
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

export default TNavbar;