const TNavbar = {
    navPages: [
        { id: 1, name: 'HOME' },
        { id: 2, name: 'ABOUT' },
        { id: 3, name: 'WORK' },
        { id: 4, name: 'CONTACT' },
        { id: 5, name: 'SKILLS' },
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